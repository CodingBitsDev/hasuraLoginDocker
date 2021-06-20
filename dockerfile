FROM ubuntu:18.04

LABEL maintainer="lprenji@gmail.com"
LABEL version="0.1"
LABEL description="Node Server to handle login and signup of hasura"

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y

EXPOSE 4000

COPY nodeLogin /root/nodeLogin

WORKDIR /root/nodeLogin
RUN pwd
RUN rm -rf node_modules
RUN npm install

CMD ["/usr/bin/npm", "run", "start"]