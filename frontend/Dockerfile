FROM oven/bun:1 AS base

WORKDIR /app

COPY package*.json bun.lock* ./

RUN bun install

COPY . .

RUN bun build src/index.ts

FROM devforth/spa-to-http:latest

COPY --from=builder /app/dist/ .

EXPOSE 8080

CMD ["spa-to-http"]
