FROM golang:alpine AS builder
ENV GO111MODULE=on \
    GOOS=linux \
    GOARCH=amd64 \
    GOPROXY=https://goproxy.cn,direct

# 移动到工作目录：/build
WORKDIR /build

COPY . .

RUN go build -o webapp .

WORKDIR /dist

RUN cp /build/webapp .
COPY ./config /dist/config
# 需要运行的命令
ENTRYPOINT  ["/dist/webapp"]
