package service

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/pkg/errors"
	"strconv"
	"time"
)

var (
	Secret = []byte("HDU_DB_HOMEWORK") // token加密字符串
)

/* token模型 */
type Claims struct {
	UserId uint
	jwt.StandardClaims
}

func CreateToken(username string) (string, error) {
	usernameUint, _ := strconv.ParseUint(username, 10, 32)
	/* 根据用户身份生成claim */
	claims := Claims{
		UserId: uint(usernameUint),
		StandardClaims: jwt.StandardClaims{
			Issuer:    "nic",
			Audience:  "user",
			ExpiresAt: time.Now().Add(time.Hour * 24 * 15).Unix(),
		},
	}
	/* 根据claim生成token */
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	/* 用secret对token加密 */
	return token.SignedString(Secret)
}

/* 解析token,得到用户信息 */
func ParseToken(tokenString string) (uint, error) {
	if tokenString == "" {
		return 0, errors.New("token is empty")
	}
	/* 解析tokenString,保证加密方法相同 */
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return Secret, nil
	})
	if err != nil {
		return 0, err
	}
	/* 断言claim类型以及验证token有效期 */
	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims.UserId, nil
	} else {
		return 0, err
	}

}
