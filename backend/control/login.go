package control

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"hdu_db_homework/driver"
	"hdu_db_homework/service"
)

type Result struct {
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
		if err := service.CheckAccount(username, password); err != nil {
			failResponse(c, err)
			return
		}

		/* 检查是否已经注册 */
		if tx := driver.DB.Raw(fmt.Sprintf("SELECT username,password FROM %v where username = ?", tableName), username).Scan(&result); tx.RowsAffected == 0 {
			failResponse(c, service.NotExistError)
			return
		}

		/* 验证密码 */
		if err := bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(password)); err != nil {
			failResponse(c, service.LoginError)
			return
		}

		/* 生成token */
		token, err := service.CreateToken(username)
		if err != nil {
			failResponse(c, service.CreateTokenError)
			return
		}
		data := map[string]interface{}{"token": token}
		sucResponse(c, "登录成功", data)
	}
}
