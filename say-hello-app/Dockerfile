FROM node:19-alpine as builder
WORKDIR /app 
COPY . . 
RUN npm install 
RUN npm run build

# CMD ["npx", "serve", "build"]
FROM nginx 
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"] 