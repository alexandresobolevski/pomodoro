FROM node:10.14

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
COPY package.json /usr/local/app/
RUN npm install

ADD src /usr/local/app/src
COPY src /usr/local/app/src

EXPOSE 3000

CMD ["npm", "start"]
