# Dockerizing MongoDB: Dockerfile for building MongoDB images
# Based on ubuntu:latest, installs MongoDB following the instructions from:
# http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

FROM ubuntu:16.04
LABEL maintainer="izhoujialiang@qq.com"

# Installation:
# Import the public key used by the package management system.
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
# Create a list file for MongoDB,Create the /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list
# Reload local package database
RUN apt-get update
# Install the MongoDB packages
RUN apt-get install -y -q mongodb-org

VOLUME ["/data/db"]

WORKDIR /data

EXPOSE 27017

CMD [ "mongod" ] 