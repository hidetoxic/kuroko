FROM node:18-alpine

# Create Work directory
WORKDIR /kuroko

# Cope WEB UI
COPY client/dist /kuroko/client/dist

# Build Server
COPY server/ /kuroko/server
COPY server/dist /kuroko/server/dist

WORKDIR server

RUN npm install

EXPOSE 8050

ENTRYPOINT [ "node","./dist/main.js" ]