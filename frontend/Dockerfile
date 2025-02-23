FROM node:20-alpine as builder
RUN npm install -g bun
WORKDIR /code/
ADD package*.json bun.lock* ./
RUN bun install
ADD . .
RUN bunx --bun vite build

FROM devforth/spa-to-http:latest
COPY --from=builder /code/dist/ .
