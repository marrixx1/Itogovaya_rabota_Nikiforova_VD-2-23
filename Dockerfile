FROM node:24.12.0-alpine3.23 AS builder

WORKDIR /app

COPY app/package*.json ./

RUN npm ci && npm cache clean --force

COPY app/ ./

RUN npm run build
FROM nginx:1.29.6-alpine-slim

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]