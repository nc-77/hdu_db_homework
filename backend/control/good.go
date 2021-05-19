package control

import (
	"fmt"
	"github.com/fatih/structs"
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	"hdu_db_homework/driver"
	"hdu_db_homework/service"
	"hdu_db_homework/utils"
)

type goodWithImg struct {
	good   service.Good
	imgUrl string
}

// @Summary 查询所有商品信息
// @Description 查询所有商品信息
// @Tags good
// @Accept mpfd
// @Success 200 {string} json "{"code":"200","msg": "所有商品查询成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "所有商品查询失败","data":""}"
// @Router /good/all [get]
func goodGetAllHandle(c *gin.Context) {
	goods := make([]service.Good, 0)
	if result := driver.DB.Find(&goods); result.Error != nil {
		utils.FailResponse(c, result.Error)
		return
	}
	// 查询成功
	utils.SucResponse(c, "所有商品查询成功", goods)
}

// @Security ApiKeyAuth
// @Summary 查询商品信息
// @Description 查询卖家token查询上架商品信息
// @Tags good
// @Accept mpfd
// @Success 200 {string} json "{"code":"200","msg": "商品查询成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "商品查询失败","data":""}"
// @Router /good [get]
func goodGetHandle(c *gin.Context) {
	goods := make([]service.Good, 0)

	scopeGet, _ := c.Get("scope")
	id, _ := c.Get("id")

	sellerID := id.(int)
	scope := scopeGet.(string)

	if result := driver.DB.Where("seller_id = ?", sellerID).Find(&goods); result.Error != nil {
		utils.FailResponse(c, utils.GoodSelectError)
	}
	// 权限验证
	if scope != "seller" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}
	// 查询成功
	utils.SucResponse(c, "商品查询成功", goods)
}

// @Security ApiKeyAuth
// @Summary 卖家上传商品信息
// @Description 根据卖家token添加商品信息,商品图片url默认为http://pic.nc-77.top/商品id.jpg
// @Tags good
// @Accept mpfd
// @Param name formData string true "商品名"
// @Param price formData int true "商品价格"
// @Param label formData string true "商品分类"
// @Param number formData int true "商品数量"
// @Param text formData string false "商品描述"
// @Param file formData file false "商品图片"
// @Success 200 {string} json "{"code":"200","msg": "商品上架成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "商品上架失败","data":""}"
// @Router /good [post]
func goodAddHandle(c *gin.Context) {
	var seller service.Seller
	var good service.Good
	username, _ := c.Get("username")
	scopeGet, _ := c.Get("scope")

	id, _ := c.Get("id")
	seller.ID = id.(int)
	seller.Username = username.(string)
	scope := scopeGet.(string)

	// 权限验证
	if scope != "seller" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}
	// 绑定表单
	if err := c.ShouldBind(&good); err != nil {
		utils.FailResponse(c, err)
	}
	good.SellerId = seller.ID

	if result := driver.DB.Create(&good); result.Error != nil {
		utils.FailResponse(c, utils.GoodAddError)
		fmt.Println(errors.Wrap(result.Error, utils.GoodAddError.Error()))
		return
	}
	// 上传img至图床
	imgUrl, err := driver.UploadToOss(c, good.ID)
	if err != nil {
		utils.FailResponse(c, errors.WithMessage(err, "file upload to oss failed"))
		fmt.Printf("%v\n", err)
		return
	}
	data := structs.Map(good)
	data["imgUrl"] = imgUrl
	utils.SucResponse(c, "商品添加成功", data)

}