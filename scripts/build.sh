#! /bin/bash

npm i -g nr

cd client && nr build
cd ..
cd server && nr build
cd ..

docker build -t hidetodong315/kuroko .
