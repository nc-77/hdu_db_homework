package service

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"hdu_db_homework/driver"
	"time"
)

type Buyer struct {
	ID       uint   `gorm:"primarykey"`
	Name     string ` json:"name" form:"name"`
	Phone    string `json:"phone" form:"phone"`
	Username string ` json:"username" form:"username"`
	Password string `json:"password" form:"password"`
	Nickname string `json:"nickname" form:"nickname"`

	CreatedAt time.Time      `json:"created_at" `
	UpdatedAt time.Time      `json:"updated_at" `
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deleted_at"`
}

func (buyer *Buyer) Register() error {

	// 账号密码参数检验
	if ok := checkUserNum(buyer.Username); !ok {
		return usernameError
	}
	if ok := checkPassword(buyer.Password); !ok {
		return passwordError
	}
	// 检查该学号是否被注册
	if tx := driver.DB.Where("username = ?", buyer.Username).Find(buyer); tx.RowsAffected != 0 {
		return existError
	}

	// 加密密码
	hash, err := bcrypt.GenerateFromPassword([]byte(buyer.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	buyer.Password = string(hash)
	// 持久化至数据库
	if result := driver.DB.Create(buyer); result.Error != nil {
		return RegisterError
	}
	return nil
}
