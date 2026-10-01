# ── Multi-stage Dockerfile for Sanskar Backend API ──
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

RUN npm ci
RUN npx prisma generate

COPY src ./src/
RUN npm run build

# ── Production Runtime ──
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
COPY prisma ./prisma/

# Install only production dependencies
RUN npm ci --omit=dev
RUN npx prisma generate

# Copy built code from builder
COPY --from=builder /app/dist ./dist

# Create persistent data directory for SQLite database
RUN mkdir -p /app/data

EXPOSE 5000

# Push prisma schema (creates tables if needed) and start server
CMD ["sh", "-c", "npx prisma db push && node dist/server.js"]
