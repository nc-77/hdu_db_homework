package service

import (
	"gorm.io/gorm"
	"time"
)

type Good struct {
	ID        int            ` json:"id" gorm:"primarykey"`
	Name      string         ` json:"name" form:"name"`
	Price     float32        `json:"price" form:"price"`
	Label     string         `json:"label" form:"label"`
	Text      string         `json:"text" form:"text"`
	SellerId  int            `json:"sellerId" form:"sellerId"`
	Number    int            `json:"number" form:"number"`
	CreatedAt time.Time      `json:"created_at" `
	UpdatedAt time.Time      `json:"updated_at" `
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deleted_at"`
}
