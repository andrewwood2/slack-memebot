FROM node:10.16.0
WORKDIR /app/
COPY package.json .
RUN yarn
COPY ./src ./src
CMD yarn start