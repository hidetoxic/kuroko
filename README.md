<!-- <p align="center">
  <a href="https://github.com/whyour/qinglong">
    <img width="150" src="https://user-images.githubusercontent.com/22700758/191449379-f9f56204-0e31-4a16-be5a-331f52696a73.png">
  </a>
</p> -->

<h1 align="center">Kuroko</h1>

---

## Why

Kuroko,is "黒子" in Japanese,the supporter of the majesty,do everything in shadow.

## What is

A configurable structural notifier based on Vue3/Vite/NestJs

🚧 This project is current under heavy development.

---

## Feature

🔧 Several notify base supported(See at [Support List](#support-list))

⏱️ Scheduled tasks supported

---

## Usage

### Starting with Docker

#### Docker usage

##### Download Image

`docker pull hidetodong315/kuroko:latest`

##### Run Container

`docker run -dt -p 8050:8050 -p 8090:8090 -v <custom_path>:data/config`

#### Or using Docker Compose

```docker-compose
version: '3.3'
services:
    kuroko:
        container_name: kuroko
        volumes:
            - <custom_path>:data/config
        ports:
            - '8050:8050'   # Port for server
            - '8090:8090'   # Port for client
        restart: always
        image: hidetodong315/kuroko:latest
```

### Starting with NPM

`pnpm run start`

or prefer using `nr`

`npm i -g nr`

then

`nr start`

## API

(WIP)

## Support List

- Bark（WIP）
