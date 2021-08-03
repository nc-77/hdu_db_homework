package control

import (
	"github.com/gin-gonic/gin"
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
	goods, err := service.GetAllGoods()
	if err != nil {
		utils.FailResponse(c, err)
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
// @Param price formData float32 true "商品价格"
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
		utils.FailResponse(c, utils.GoodAddError)
		return
	}
	good.SellerId = seller.ID
	if result := driver.DB.Create(&good); result.Error != nil {
		utils.FailResponse(c, utils.GoodAddError)
		return
	}

	_, err := c.FormFile("file")
	if err == nil {
		// 上传img至图床
		imgUrl, err := driver.UploadToOss(c, good.ID)
		if err != nil {
			utils.FailResponse(c, err)
			return
		}
		driver.DB.Model(&good).Update("img_url", imgUrl)
	}

	utils.SucResponse(c, "商品添加成功", good)

}

// @Summary 指定条件筛选商品
// @Description 根据id,name,label筛选商品 有id参数时忽略name及label参数
// @Tags good
// @Accept mpfd
// @Param buyer_id query int false "商品id"
// @Param name query string false "商品名"
// @Param label query string false "商品分类"
// @Success 200 {string} json "{"code":"200","msg": "筛选商品成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "筛选商品失败","data":""}"
// @Router /good/filter [get]
func goodSearchHandle(c *gin.Context) {
	name := c.Query("name")
	label := c.Query("label")
	id := c.Query("buyer_id")
	goods, err := service.FilterGoods(id, name, label)
	if err != nil {
		utils.FailResponse(c, err)
		return
	}
	utils.SucResponse(c, "筛选商品成功", goods)
}
