FROM centos:7
MAINTAINER Maowason
RUN curl -sL https://rpm.nodesource.com/setup_14.x |  bash -
RUN yum  install nodejs -y
COPY crudapi /crudapi
RUN npm install --prefix /crudapi
EXPOSE 9000
ENTRYPOINT npm start --prefix /crudapi