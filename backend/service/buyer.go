package service

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"hdu_db_homework/driver"
	"hdu_db_homework/utils"
	"time"
)

type Buyer struct {
	ID       uint   ` json:"id" gorm:"primarykey"`
	Name     string ` json:"name" form:"name"`
	Phone    string `json:"phone" form:"phone"`
	Username string ` json:"username" form:"username"`
	Password string `json:"-" form:"password"`
	Nickname string `json:"nickname" form:"nickname"`

	CreatedAt time.Time      `json:"created_at" `
	UpdatedAt time.Time      `json:"updated_at" `
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deleted_at"`
}

func (buyer *Buyer) Register() error {

	// 账号密码参数检验
	if err := utils.CheckAccount(buyer.Username, buyer.Password); err != nil {
		return err
	}
	// 检查该学号是否被注册
	if tx := driver.DB.Where("Username = ?", buyer.Username).Find(buyer); tx.RowsAffected != 0 {
		return utils.ExistError
	}

	// 加密密码
	hash, err := bcrypt.GenerateFromPassword([]byte(buyer.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	buyer.Password = string(hash)
	// 持久化至数据库
	if result := driver.DB.Create(buyer); result.Error != nil {
		return utils.RegisterError
	}
	return nil
}

func (buyer *Buyer) Get() error {
	// 学号合法性检验
	if err := utils.CheckUsername(buyer.Username); err != true {
		return utils.UsernameError
	}
	// 根据学号查询
	if tx := driver.DB.Where("Username = ?", buyer.Username).First(buyer); tx.Error != nil {
		return utils.NotExistError
	}
	return nil
}
