# FROM ubuntu:18.04
FROM openjdk:8-slim

RUN apt update

RUN apt install curl -y

RUN apt-get install unzip -y

# RUN apt-get install openjdk-8-jdk -y

RUN java -version

ARG android_home=/opt/android/sdk

RUN mkdir -p ${android_home}

RUN curl https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -L -o sdk-tools.zip

RUN unzip sdk-tools.zip -d ${android_home}

ENV ANDROID_HOME ${android_home}
ENV PATH=${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${PATH}

# RUN mkdir ~/.android && echo '### User Sources for Android SDK Manager' > ~/.android/repositories.cfg

RUN yes | sdkmanager --licenses && yes | sdkmanager --update

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash

RUN apt-get install nodejs -y

RUN npm install -g react-native-cli

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT cd android && ./gradlew assembleRelease

