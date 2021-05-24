package control

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"hdu_db_homework/driver"
	"hdu_db_homework/service"
	"hdu_db_homework/utils"
)

var (
	notFinished = 0
)

// @Security ApiKeyAuth
// @Summary 买家下单
// @Description 买家登录后(需要token)通过该接口下单
// @Tags order
// @Accept mpfd
// @Param good_id formData string true "下单商品id"
// @Param number formData int true "下单商品数量"
// @Param trade_date formData string true "线下交易日期"
// @Success 200 {string} json "{"code":"200","msg": "商品下单成功","data":""}"
// @Failure 400 {string} json "{"code":"400","msg": "商品下单失败","data":""}"
// @Router /order [post]
func orderAddHandle(c *gin.Context) {
	var order service.Order
	buyerId, _ := c.Get("id")
	scopeGet, _ := c.Get("scope")
	order.BuyerId, _ = buyerId.(int)
	scope, _ := scopeGet.(string)
	order.Status = notFinished
	// 权限验证
	if scope != "buyer" && scope != "admin" {
		utils.FailResponse(c, utils.AuthError)
		return
	}
	if err := c.ShouldBind(&order); err != nil {

		utils.FailResponse(c, utils.OrderAddError)
		return
	}
	fmt.Println(order)
	if result := driver.DB.Create(&order); result.Error != nil {

		utils.FailResponse(c, utils.OrderAddError)
		return
	}
	utils.SucResponse(c, "订单添加成功", order)
}
