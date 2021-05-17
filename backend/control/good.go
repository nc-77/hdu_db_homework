package control

import (
	"github.com/gin-gonic/gin"
	"hdu_db_homework/driver"
	"hdu_db_homework/service"
	"hdu_db_homework/utils"
)

// @Security ApiKeyAuth
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
