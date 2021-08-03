package service

import (
	"github.com/pkg/errors"
	"gorm.io/gorm"
	"hdu_db_homework/driver"
	"time"
)

type Good struct {
	ID        int            ` json:"id" gorm:"primarykey"`
	Name      string         ` json:"name" form:"name"`
	Price     float32        `json:"price" form:"price"`
	Label     string         `json:"label" form:"label"`
	Text      string         `json:"text" form:"text"`
	SellerId  int            `json:"seller_id" form:"seller_id"`
	Number    int            `json:"number" form:"number"`
	ImgUrl    string         `json:"img_url" form:"img_url"`
	CreatedAt time.Time      `json:"created_at" `
	UpdatedAt time.Time      `json:"updated_at" `
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deleted_at"`
}

func GetAllGoods() ([]Good, error) {
	goods := make([]Good, 0)
	result := driver.DB.Find(&goods)
	return goods, errors.Wrap(result.Error, "获取所有商品失败")
}

func FilterGoods(id, name, label string) ([]Good, error) {

	goods := make([]Good, 0)
	var result *gorm.DB
	if id != "" {
		result = driver.DB.Where("id = ?", id).Find(&goods)
	} else if label != "" {
		result = driver.DB.Where("name like ? and label = ?", "%"+name+"%", label).Find(&goods)
	} else {
		result = driver.DB.Where("name like ? ", "%"+name+"%", label).Find(&goods)
	}
	return goods, errors.Wrap(result.Error, "筛选商品失败")
}
