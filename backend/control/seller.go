package control

import (
	"github.com/gin-gonic/gin"
	"hdu_db_homework/driver"
	"hdu_db_homework/service"
	"hdu_db_homework/utils"
	"log"
	"strconv"
)

// @Summary 卖家注册
// @Description 卖家注册
// @Tags seller
// @Accept mpfd
// @Param username formData string true "学号"
// @Param password formData string true "密码"
// @Param name formData string false "姓名"
// @Param phone formData string false "联系方式"
// @Param nickname formData string false "昵称"
// @Success 200 {string} json "{"code":"200","msg": "用户注册成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "用户创建失败","data":""}"
// @Router /seller/register [post]
func sellerRegisterHandle(c *gin.Context) {
	var seller service.Seller
	// 绑定表单
	if err := c.ShouldBind(&seller); err != nil {
		utils.FailResponse(c, err)
		return
	}

	// 注册到数据库
	if err := seller.Register(); err != nil {
		utils.FailResponse(c, err)
		return
	}

	// 注册成功
	utils.SucResponse(c, "用户注册成功", nil)
}

// @Security ApiKeyAuth
// @Summary 查询卖家个人信息
// @Description 根据token获取卖家个人信息
// @Tags seller
// @Accept mpfd
// @Success 200 {string} json "{"code":"200","msg": "用户查询成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "用户查询失败","data":""}"
// @Router /seller/myself [get]
func sellerGetSelfHandle(c *gin.Context) {
	var seller service.Seller
	username, _ := c.Get("username")
	scopeGet, _ := c.Get("scope")
	seller.Username, _ = username.(string)
	scope, _ := scopeGet.(string)
	// 权限验证
	if scope != "seller" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}

	// 查询失败
	if err := seller.Get(); err != nil {
		utils.FailResponse(c, err)
		return
	}
	// 查询成功
	utils.SucResponse(c, "用户查询成功", seller)
}

// @Security ApiKeyAuth
// @Summary 查询卖家个人信息
// @Description 根据id获取卖家个人信息
// @Tags seller
// @Accept mpfd
// @Param seller_id query int true "卖家id"
// @Success 200 {string} json "{"code":"200","msg": "用户查询成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "用户查询失败","data":""}"
// @Router /seller [get]
func sellerGetHandler(c *gin.Context) {
	var seller service.Seller
	id := c.Query("seller_id")
	seller.ID, _ = strconv.Atoi(id)
	scopeGet, _ := c.Get("scope")
	scope, _ := scopeGet.(string)
	// 权限验证
	if scope != "buyer" && scope != "seller" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}
	if result := driver.DB.First(&seller); result.Error != nil {
		log.Println(result.Error)
		utils.FailResponse(c, utils.NotExistError)
	}
	utils.SucResponse(c, "用户查询成功", seller)
}

// @Security ApiKeyAuth
// @Summary 更新卖家个人信息
// @Description 根据token更新卖家个人信息
// @Tags seller
// @Accept mpfd
// @Param name formData string false "姓名"
// @Param phone formData string false "联系方式"
// @Param nickname formData string false "昵称"
// @Success 200 {string} json "{"code":"200","msg": "用户更新成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "用户更新失败","data":""}"
// @Router /seller [put]
func sellerUpdateHandle(c *gin.Context) {
	var seller service.Seller
	username, _ := c.Get("username")
	scopeGet, _ := c.Get("scope")
	seller.Username, _ = username.(string)
	scope, _ := scopeGet.(string)
	// 权限验证
	if scope != "seller" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}
	// 绑定表单
	if err := c.ShouldBind(&seller); err != nil {
		utils.FailResponse(c, utils.UserUpdateError)
		return
	}

	// 更新失败
	if err := seller.Update(); err != nil {
		utils.FailResponse(c, err)
		return
	}
	// 更新成功
	utils.SucResponse(c, "用户更新成功", nil)

}
