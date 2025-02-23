FROM node:20-alpine as builder

RUN npm install -g bun

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

RUN bun build

FROM devforth/spa-to-http:latest

COPY --from=builder /app/dist/ .

EXPOSE 8080

CMD ["spa-to-http"]
