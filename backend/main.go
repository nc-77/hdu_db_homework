package main

import (
	"hdu_db_homework/control"
	_ "hdu_db_homework/docs"
	"hdu_db_homework/driver"
	"log"
)

// @title Swagger Example API
// @version 1.0
// @description This is a sample server celler server.
// @termsOfService https://www.topgoer.com

//@securityDefinitions.apikey ApiKeyAuth
//@in header
//@name Authorization

// @contact.name www.topgoer.com
// @contact.url https://www.topgoer.com
// @contact.email me@razeen.me

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host 127.0.0.1:8080
// @BasePath /api

func main() {
	if err := driver.CreateDbConnection(); err != nil {
		log.Printf("%+v", err)
		return
	}

	router := control.InitRouter()
	router.Run(":8080")
}
