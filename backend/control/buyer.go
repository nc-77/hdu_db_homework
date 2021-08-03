package control

import (
	"github.com/gin-gonic/gin"
	"hdu_db_homework/service"
	"hdu_db_homework/utils"
)

// @Summary 买家注册
// @Description 买家注册
// @Tags buyer
// @Accept mpfd
// @Param username formData string true "学号"
// @Param password formData string true "密码"
// @Param name formData string false "姓名"
// @Param phone formData string false "联系方式"
// @Param nickname formData string false "昵称"
// @Success 200 {string} json "{"code":"200","msg": "用户注册成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "用户创建失败","data":""}"
// @Router /buyer/register [post]
func buyerRegisterHandle(c *gin.Context) {
	var buyer service.Buyer
	// 绑定表单
	if err := c.ShouldBind(&buyer); err != nil {
		utils.FailResponse(c, err)
		return
	}

	// 注册到数据库
	if err := buyer.Register(); err != nil {
		utils.FailResponse(c, err)
		return
	}

	// 注册成功
	utils.SucResponse(c, "用户注册成功", nil)
}

// @Security ApiKeyAuth
// @Summary 查询买家个人信息
// @Description 根据token获取买家个人信息
// @Tags buyer
// @Accept mpfd
// @Success 200 {string} json "{"code":"200","msg": "用户查询成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "用户查询失败","data":""}"
// @Router /buyer/myself [get]
func buyerGetHandle(c *gin.Context) {
	var buyer service.Buyer
	username, _ := c.Get("username")
	scopeGet, _ := c.Get("scope")
	buyer.Username, _ = username.(string)
	scope, _ := scopeGet.(string)
	// 权限验证
	if scope != "buyer" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}

	// 查询失败
	if err := buyer.Get(); err != nil {
		utils.FailResponse(c, err)
		return
	}
	// 查询成功
	utils.SucResponse(c, "用户查询成功", buyer)
}

// @Security ApiKeyAuth
// @Summary 更新买家个人信息
// @Description 根据token更新买家个人信息
// @Tags buyer
// @Accept mpfd
// @Param name formData string false "姓名"
// @Param phone formData string false "联系方式"
// @Param nickname formData string false "昵称"
// @Success 200 {string} json "{"code":"200","msg": "用户更新成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "用户更新失败","data":""}"
// @Router /buyer [put]
func buyerUpdateHandle(c *gin.Context) {
	var buyer service.Buyer
	username, _ := c.Get("username")
	scopeGet, _ := c.Get("scope")
	buyer.Username, _ = username.(string)
	scope, _ := scopeGet.(string)
	// 权限验证
	if scope != "buyer" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}
	// 绑定表单
	if err := c.ShouldBind(&buyer); err != nil {
		utils.FailResponse(c, err)
		return
	}

	// 更新失败
	if err := buyer.Update(); err != nil {
		utils.FailResponse(c, err)
		return
	}
	// 更新成功
	utils.SucResponse(c, "用户更新成功", nil)

}
