package middleWare

import (
	"github.com/gin-gonic/gin"
	"hdu_db_homework/service"
	"hdu_db_homework/utils"
	"strings"
)

func JwtAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			utils.FailResponse(c, utils.MissTokenError)
			c.Abort()
			return
		}
		/* 剥离Bearer令牌头 */
		parts := strings.SplitN(authHeader, " ", 2)
		claims, err := service.ParseToken(parts[1])
		if err != nil {
			utils.FailResponse(c, err)
			c.Abort()
			return
		}
		c.Set("username", claims.Username)
		c.Set("scope", claims.Scope)

	}
}
