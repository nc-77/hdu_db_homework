package service

import (
	"gorm.io/gorm"

	"time"
)

type Order struct {
	ID        int            ` json:"id" gorm:"primarykey"`
	GoodId    int            ` json:"good_id" form:"good_id"`
	Number    float32        `json:"number" form:"number"`
	BuyerId   int            `json:"buyer_id" form:"buyer_id"`
	TradeDate string         `json:"trade_date" form:"trade_date"`
	Status    int            `json:"sellerId" form:"sellerId" `
	Evaluate  int            `json:"evaluate" from:"evaluate" gorm:"default:-1"`
	CreatedAt time.Time      `json:"created_at" `
	UpdatedAt time.Time      `json:"updated_at" `
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deleted_at"`
}
