package driver

import (
	"fmt"
	"github.com/aliyun/aliyun-oss-go-sdk/oss"
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	"gopkg.in/ini.v1"
	"hdu_db_homework/utils"
	"path"
	"strconv"
)

const (
	dst      = "./img/"
	endpoint = "http://pic.nc-77.top/"
)

type aliOssCfg struct {
	endpoint        string
	accessKeyId     string
	accessKeySecret string
	bucketName      string
}

func (oss *aliOssCfg) init() error {
	filename := "./driver/aliOss.ini"
	cfg, err := ini.Load(filename)
	if err != nil {
		return errors.Wrap(err, fmt.Sprintf("load %s failed\n", filename))
	}
	oss.endpoint = cfg.Section("Oss").Key("endpoint").String()
	oss.accessKeyId = cfg.Section("Oss").Key("accessKeyId").String()
	oss.accessKeySecret = cfg.Section("Oss").Key("accessKeySecret").String()
	oss.bucketName = cfg.Section("Oss").Key("bucketName").String()
	return nil
}
func UploadToLocal(c *gin.Context, goodId int) (string, error) {

	file, err := c.FormFile("file")
	if err != nil {
		return "", errors.Wrap(err, "request中未包含file字段")
	}
	fileSuffix := path.Ext(file.Filename)
	if fileSuffix != ".img" && fileSuffix != ".png" && fileSuffix != ".jpg" && fileSuffix != ".jpeg" {
		return "", utils.FileTypeError
	}
	idString := strconv.Itoa(goodId)
	file.Filename = idString + fileSuffix
	filePath := dst + file.Filename
	if err := c.SaveUploadedFile(file, filePath); err != nil {
		return "", err
	}
	return filePath, nil

}
func UploadToOss(c *gin.Context, goodId int) (string, error) {
	filePath, err := UploadToLocal(c, goodId)
	if err != nil {
		return "", errors.WithMessage(err, "文件保存至本地失败")
	}

	var cfg aliOssCfg
	if err := cfg.init(); err != nil {
		return "", err
	}
	//创建OSSClient实例
	client, err := oss.New(cfg.endpoint, cfg.accessKeyId, cfg.accessKeySecret)
	if err != nil {
		return "", err
	}
	// 获取存储空间
	bucket, err := client.Bucket(cfg.bucketName)
	if err != nil {
		return "", err
	}
	fileName := path.Base(filePath)
	ossFilePath := endpoint + fileName
	// 上传文件流
	err = bucket.PutObjectFromFile(fileName, filePath)
	if err != nil {
		return "", err
	}
	return ossFilePath, nil
}
