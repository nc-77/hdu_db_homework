package utils

import (
	"regexp"
)

func CheckEmail(email string) (b bool) {
	ok, _ := regexp.MatchString("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+", email)
	return ok
}
func CheckPassword(password string) (b bool) {
	ok, _ := regexp.MatchString("^[a-zA-Z0-9]{4,16}$", password)
	return ok
}

func CheckUsername(username string) (b bool) {
	ok, _ := regexp.MatchString("^[0-9]{4,10}$", username)
	return ok
}

func CheckAccount(username, password string) (err error) {
	if ok := CheckUsername(username); !ok {
		return UsernameError
	}
	if ok := CheckPassword(password); !ok {
		return passwordError
	}
	return nil
}
