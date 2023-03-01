FROM node:18-alpine

# Create Work directory
WORKDIR /kuroko

# Cope WEB UI

COPY ./client/dist ./client/dist

# Build Server

COPY ./server/package*.json ./server/package*.json

RUN npm install

EXPOSE 8050 9050



