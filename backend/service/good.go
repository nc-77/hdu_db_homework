package service

import (
	"gorm.io/gorm"
	"time"
)

type Good struct {
	ID        uint           ` json:"id" gorm:"primarykey"`
	Name      string         ` json:"name" form:"name"`
	Price     float32        `json:"price" form:"price"`
	Class     string         `json:"class" form:"class"`
	Des       string         `json:"des" form:"des"`
	SellerId  string         `json:"sellerId" form:"sellerId"`
	Reserve   int            `json:"reserve" form:"reserve"`
	CreatedAt time.Time      `json:"created_at" `
	UpdatedAt time.Time      `json:"updated_at" `
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deleted_at"`
}
