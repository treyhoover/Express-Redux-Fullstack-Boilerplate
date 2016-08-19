FROM node:slim
MAINTAINER Trey Hoover

VOLUME /home/app/src
VOLUME /home/app/server.js

WORKDIR /home/app

COPY ./package.json /home/app/package.json
COPY ./webpack.config.js /home/app/webpack.config.js

RUN ["npm", "install"]
CMD ["npm", "start"]