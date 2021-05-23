package utils

import "github.com/pkg/errors"

var (
	UsernameError    = errors.New("账号必须为4-10位的学号")
	passwordError    = errors.New("密码必须为4-16位的英文数字")
	RegisterError    = errors.New("用户创建失败")
	UserUpdateError  = errors.New("用户更新失败")
	ExistError       = errors.New("用户已存在")
	NotExistError    = errors.New("用户不存在")
	LoginError       = errors.New("密码错误")
	CreateTokenError = errors.New("用户Token生成失败")
	MissTokenError   = errors.New("请求缺少Token头部")
	ParseTokenError  = errors.New("用户Token错误")
	TokenValidError  = errors.New("用户Token已过期")
	AuthError        = errors.New("未允许的授权")
)
var (
	FileTypeError   = errors.New("文件类型错误")
	GoodAddError    = errors.New("商品添加失败")
	GoodSelectError = errors.New("商品查询失败")
	OrderAddError   = errors.New("订单添加失败")
)
