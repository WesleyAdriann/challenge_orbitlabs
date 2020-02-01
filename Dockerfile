FROM ubuntu:18.04

RUN apt update

RUN apt install curl -y

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash

RUN apt-get install nodejs -y

RUN node -v && npm -v

RUN npm install -g react-native-cli

WORKDIR /app

RUN npm install

COPY . .

ENTRYPOINT cd android && ./gradlew assembleRelease

