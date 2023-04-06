# Kuroko

A configurable structural notifier based on Vue3/Vite and NestJs

🚧 This project is current under heavy development.

## Feature

🔧 Several notify base supported(See at [Support List](#support-list))

⏱️ Scheduled tasks supported
****

## Usage

### Starting with Docker

#### Docker usage

##### Download Image

`docker pull hidetodong315/kuroko:latest`

##### Run Container

`docker run -dt -p 8050:8050 -p 8090:8090 -v data/config:data/config`

#### Or using docker compose

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

## Support List

- Bark（WIP）
