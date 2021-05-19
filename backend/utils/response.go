package utils

import (
	"github.com/gin-gonic/gin"
)

func FailResponse(c *gin.Context, msg error) {
	c.JSON(400, gin.H{
		"code": 400,
		"msg":  msg.Error(),
		"data": "",
	})
}

func SucResponse(c *gin.Context, msg string, data interface{}) {
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  msg,
		"data": data,
	})
}
