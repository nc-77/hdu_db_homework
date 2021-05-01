package middleWare

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func CorsAuth() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
	return cors.New(config)
}
