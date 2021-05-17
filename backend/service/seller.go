package service

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"hdu_db_homework/driver"
	"hdu_db_homework/utils"
	"time"
)

type Seller struct {
	ID        uint           ` json:"id" gorm:"primarykey"`
	Name      string         ` json:"name" form:"name"`
	Phone     string         `json:"phone" form:"phone"`
	Username  string         ` json:"username" form:"username"`
	Password  string         `json:"-" form:"password"`
	Nickname  string         `json:"nickname" form:"nickname"`
	Credit    int            `json:"credit" gorm:"default:100"`
	CreatedAt time.Time      `json:"created_at" `
	UpdatedAt time.Time      `json:"updated_at" `
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deleted_at"`
}

func (seller *Seller) Register() error {

	// 账号密码参数检验
	if err := utils.CheckAccount(seller.Username, seller.Password); err != nil {
		return err
	}
	// 检查该学号是否被注册
	if tx := driver.DB.Where("Username = ?", seller.Username).Find(seller); tx.RowsAffected != 0 {
		return utils.ExistError
	}

	// 加密密码
	hash, err := bcrypt.GenerateFromPassword([]byte(seller.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	seller.Password = string(hash)
	// 持久化至数据库

	if result := driver.DB.Create(seller); result.Error != nil {
		return utils.RegisterError
	}
	return nil
}

func (seller *Seller) Get() error {
	// 学号合法性检验
	if err := utils.CheckUsername(seller.Username); err != true {
		return utils.UsernameError
	}
	// 根据学号查询
	if tx := driver.DB.Where("Username = ?", seller.Username).First(seller); tx.Error != nil {
		return utils.NotExistError
	}
	return nil
}

func (seller *Seller) Update() error {
	if tx := driver.DB.Model(&Buyer{}).Where("username = ?", seller.Username).Updates(seller); tx.Error != nil {
		return tx.Error
	}
	return nil
}
