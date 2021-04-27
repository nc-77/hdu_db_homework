package driver

import (
	"fmt"
	"github.com/pkg/errors"
	"gopkg.in/ini.v1"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	DB *gorm.DB
)

func CreateDbConnection() error {
	filename := "./driver/dataBase.ini"
	/* 读取配置文件 */
	cfg, err := ini.Load(filename)
	if err != nil {
		return errors.WithStack(err)
	}
	/* 连接数据库 */
	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		cfg.Section("mysql").Key("username").String(),
		cfg.Section("mysql").Key("password").String(),
		cfg.Section("mysql").Key("host").String(),
		cfg.Section("mysql").Key("port").MustInt(3306),
		cfg.Section("mysql").Key("database").String(),
	)
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return errors.WithStack(err)
	}
	return nil
}
