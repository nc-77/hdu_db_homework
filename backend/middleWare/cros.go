package middleWare

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func CorsAuth() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS"}
	//config.AllowOrigins=[]string{"http://localhost:3000","http://localhost:8080"}
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization", "api_key"}
	return cors.New(config)
}
