FROM node:19-alpine as builder
WORKDIR /app 
COPY . . 
RUN npm install 
RUN npm run build

CMD ["npx", "serve", "build"]