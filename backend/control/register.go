package control

import (
	"github.com/gin-gonic/gin"
	"hdu_db_homework/service"
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
// @Router /buyer [post]
func buyerRegisterHandle(c *gin.Context) {
	var buyer service.Buyer
	// 绑定表单
	if err := c.ShouldBind(&buyer); err != nil {
		failResponse(c, err)
		return
	}

	// 注册到数据库
	if err := buyer.Register(); err != nil {
		failResponse(c, err)
		return
	}

	// 注册成功
	sucResponse(c, "用户注册成功", nil)
}
