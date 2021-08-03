// GENERATED BY THE COMMAND ABOVE; DO NOT EDIT
// This file was generated by swaggo/swag

package docs

import (
	"bytes"
	"encoding/json"
	"strings"

	"github.com/alecthomas/template"
	"github.com/swaggo/swag"
)

var doc = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{.Description}}",
        "title": "{{.Title}}",
        "termsOfService": "https://www.topgoer.com",
        "contact": {
            "name": "www.topgoer.com",
            "url": "https://www.topgoer.com",
            "email": "me@razeen.me"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/buyer": {
            "put": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "根据token更新买家个人信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "buyer"
                ],
                "summary": "更新买家个人信息",
                "parameters": [
                    {
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "联系方式",
                        "name": "phone",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "昵称",
                        "name": "nickname",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"用户更新成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"用户更新失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/buyer/login": {
            "post": {
                "description": "买家登录",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "buyer"
                ],
                "summary": "买家登录",
                "parameters": [
                    {
                        "type": "string",
                        "description": "学号",
                        "name": "username",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"登录成功\",\"data\":\"\"token\":\"xxxxxxxxx\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"登录失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/buyer/myself": {
            "get": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "根据token获取买家个人信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "buyer"
                ],
                "summary": "查询买家个人信息",
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"用户查询成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"用户查询失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/buyer/register": {
            "post": {
                "description": "买家注册",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "buyer"
                ],
                "summary": "买家注册",
                "parameters": [
                    {
                        "type": "string",
                        "description": "学号",
                        "name": "username",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "联系方式",
                        "name": "phone",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "昵称",
                        "name": "nickname",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"用户注册成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"用户创建失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/good": {
            "get": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "查询卖家token查询上架商品信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "good"
                ],
                "summary": "查询商品信息",
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"商品查询成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"商品查询失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "根据卖家token添加商品信息,商品图片url默认为http://pic.nc-77.top/商品id.jpg",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "good"
                ],
                "summary": "卖家上传商品信息",
                "parameters": [
                    {
                        "type": "string",
                        "description": "商品名",
                        "name": "name",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "number",
                        "description": "商品价格",
                        "name": "price",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "商品分类",
                        "name": "label",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "商品数量",
                        "name": "number",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "商品描述",
                        "name": "text",
                        "in": "formData"
                    },
                    {
                        "type": "file",
                        "description": "商品图片",
                        "name": "file",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"商品上架成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"商品上架失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/good/all": {
            "get": {
                "description": "查询所有商品信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "good"
                ],
                "summary": "查询所有商品信息",
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"所有商品查询成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"所有商品查询失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/good/filter": {
            "get": {
                "description": "根据id,name,label筛选商品 有id参数时忽略name及label参数",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "good"
                ],
                "summary": "指定条件筛选商品",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "商品id",
                        "name": "buyer_id",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "商品名",
                        "name": "name",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "商品分类",
                        "name": "label",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"筛选商品成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"筛选商品失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/order": {
            "post": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "买家登录后(需要token)通过该接口下单",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "order"
                ],
                "summary": "买家下单",
                "parameters": [
                    {
                        "type": "string",
                        "description": "下单商品id",
                        "name": "good_id",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "下单商品数量",
                        "name": "number",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "线下交易日期",
                        "name": "trade_date",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"商品下单成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"商品下单失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/order/buyer": {
            "get": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "买家登录后(需要token)通过该接口查询个人订单信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "order"
                ],
                "summary": "买家查询个人订单",
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"订单查询成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"订单查询失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/order/seller": {
            "get": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "卖家登录后(需要token)通过该接口查询个人订单信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "order"
                ],
                "summary": "卖家查询个人订单",
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"订单查询成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"订单查询失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/order/status": {
            "put": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "买家登录后(需要token)通过该接口确认收货",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "order"
                ],
                "summary": "买家确认收货,修改订单状态",
                "parameters": [
                    {
                        "type": "string",
                        "description": "订单id",
                        "name": "order_id",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"确认收货成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"确认收货失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/seller": {
            "get": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "根据id获取卖家个人信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "seller"
                ],
                "summary": "查询卖家个人信息",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "卖家id",
                        "name": "seller_id",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"用户查询成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"用户查询失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            },
            "put": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "根据token更新卖家个人信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "seller"
                ],
                "summary": "更新卖家个人信息",
                "parameters": [
                    {
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "联系方式",
                        "name": "phone",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "昵称",
                        "name": "nickname",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"用户更新成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"用户更新失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/seller/login": {
            "post": {
                "description": "卖家登录",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "seller"
                ],
                "summary": "卖家登录",
                "parameters": [
                    {
                        "type": "string",
                        "description": "学号",
                        "name": "username",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"登录成功\",\"data\":\"\"token\":\"xxxxxxxxx\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"登录失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/seller/myself": {
            "get": {
                "security": [
                    {
                        "ApiKeyAuth": []
                    }
                ],
                "description": "根据token获取卖家个人信息",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "seller"
                ],
                "summary": "查询卖家个人信息",
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"用户查询成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"用户查询失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/seller/register": {
            "post": {
                "description": "卖家注册",
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "seller"
                ],
                "summary": "卖家注册",
                "parameters": [
                    {
                        "type": "string",
                        "description": "学号",
                        "name": "username",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "密码",
                        "name": "password",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "姓名",
                        "name": "name",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "联系方式",
                        "name": "phone",
                        "in": "formData"
                    },
                    {
                        "type": "string",
                        "description": "昵称",
                        "name": "nickname",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":\"200\",\"msg\": \"用户注册成功\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "400": {
                        "description": "{\"code\":\"400\",\"msg\": \"用户创建失败\",\"data\":\"\"}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "securityDefinitions": {
        "ApiKeyAuth": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
        }
    }
}`

type swaggerInfo struct {
	Version     string
	Host        string
	BasePath    string
	Schemes     []string
	Title       string
	Description string
}

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = swaggerInfo{
	Version:     "1.0",
	Host:        "127.0.0.1:8080",
	BasePath:    "/api",
	Schemes:     []string{},
	Title:       "Swagger Example API",
	Description: "This is a sample server celler server.",
}

type s struct{}

func (s *s) ReadDoc() string {
	sInfo := SwaggerInfo
	sInfo.Description = strings.Replace(sInfo.Description, "\n", "\\n", -1)

	t, err := template.New("swagger_info").Funcs(template.FuncMap{
		"marshal": func(v interface{}) string {
			a, _ := json.Marshal(v)
			return string(a)
		},
	}).Parse(doc)
	if err != nil {
		return doc
	}

	var tpl bytes.Buffer
	if err := t.Execute(&tpl, sInfo); err != nil {
		return doc
	}

	return tpl.String()
}

func init() {
	swag.Register(swag.Name, &s{})
}
