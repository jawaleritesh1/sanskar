# ── Multi-stage Dockerfile for Sanskar Growth Solutions Landing Site ──
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests first for efficient layer caching
COPY package*.json ./
RUN npm ci

# Copy source code and build production assets
COPY . .
RUN npm run build

# ── Production Stage: Serve with ultra-lightweight Nginx ──
FROM nginx:alpine

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom container nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
