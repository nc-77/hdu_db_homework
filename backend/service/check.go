package service

import (
	"regexp"
)

func checkEmail(email string) (b bool) {
	ok, _ := regexp.MatchString("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+", email)
	return ok
}
func checkPassword(password string) (b bool) {
	ok, _ := regexp.MatchString("^[a-zA-Z0-9]{4,16}$", password)
	return ok
}

func checkUsername(username string) (b bool) {
	ok, _ := regexp.MatchString("^[0-9]{4,10}$", username)
	return ok
}

func CheckAccount(username, password string) (err error) {
	if ok := checkUsername(username); !ok {
		return usernameError
	}
	if ok := checkPassword(password); !ok {
		return passwordError
	}
	return nil
}
