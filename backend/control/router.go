package control

import (
	"github.com/gin-gonic/gin"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
	"hdu_db_homework/middleWare"
	"io"
	"os"
)

func InitRouter() *gin.Engine {

	// 记录log文件
	f, _ := os.Create("./backend.log")
	gin.DefaultWriter = io.MultiWriter(f, os.Stdout)

	r := gin.Default()

	r.Use(middleWare.CorsAuth())
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	buyerGroup := r.Group("/api/buyer")
	{

		//buyerGroup.GET("/all", service.GetAllBuyers)

		buyerGroup.GET("", middleWare.JwtAuth(), buyerGetHandle)
		//buyerGroup.PUT("", service.UpdateBuyer)
		buyerGroup.POST("/login", loginHandle("buyers"))
		buyerGroup.POST("/register", buyerRegisterHandle)
		buyerGroup.POST("", middleWare.JwtAuth(), buyerUpdateHandle)
		//buyerGroup.DELETE("", service.DeleteBuyer)
	}

	return r
}
