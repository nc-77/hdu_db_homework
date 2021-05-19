package control

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"hdu_db_homework/driver"
	"hdu_db_homework/service"
	"hdu_db_homework/utils"
)

type Result struct {
	Id       int
	Username string
	Password string
}

// @Summary 买家登录
// @Description 买家登录
// @Tags buyer
// @Accept mpfd
// @Param username formData string true "学号"
// @Param password formData string true "密码"
// @Success 200 {string} json "{"code":"200","msg": "登录成功","data":""token":"xxxxxxxxx""}"
// @Failure 400 {string} json "{"code":"400","msg": "登录失败","data":""}"
// @Router /buyer/login [post]
func loginHandle(tableName string) gin.HandlerFunc {
	return func(c *gin.Context) {
		var result Result
		username := c.PostForm("username")
		password := c.PostForm("password")
		/* 检查账号密码合法性 */
		if err := utils.CheckAccount(username, password); err != nil {
			utils.FailResponse(c, err)
			return
		}

		/* 检查是否已经注册 */
		if tx := driver.DB.Raw(fmt.Sprintf("SELECT id,username,password FROM %v where username = ?", tableName), username).Scan(&result); tx.RowsAffected == 0 {
			utils.FailResponse(c, utils.NotExistError)
			return
		}

		/* 验证密码 */
		if err := bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(password)); err != nil {
			utils.FailResponse(c, utils.LoginError)
			return
		}

		/* 根据username,user属性生成token */
		token, err := service.CreateToken(result.Id, username, tableName[:len(tableName)-1])
		if err != nil {
			utils.FailResponse(c, utils.CreateTokenError)
			return
		}
		data := &struct {
			Token string `json:"token"`
		}{Token: token}

		utils.SucResponse(c, "登录成功", data)
	}
}

// @Summary 卖家登录
// @Description 卖家登录
// @Tags seller
// @Accept mpfd
// @Param username formData string true "学号"
// @Param password formData string true "密码"
// @Success 200 {string} json "{"code":"200","msg": "登录成功","data":""token":"xxxxxxxxx""}"
// @Failure 400 {string} json "{"code":"400","msg": "登录失败","data":""}"
// @Router /seller/login [post]
func ping(ctx *gin.Context) {
	ctx.JSON(200, "ping")
}
