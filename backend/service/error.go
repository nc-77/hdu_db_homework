package service

import "github.com/pkg/errors"

var (
	usernameError = errors.New("账号必须为4-10位的学号")
	passwordError = errors.New("密码必须为4-16位的英文数字")
	RegisterError = errors.New("用户创建失败")
	existError    = errors.New("用户已存在")
)
