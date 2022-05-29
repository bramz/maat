FROM node:16-alpine AS builder
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn global add npm@8.11.0
RUN yarn run ts-start

FROM node:16-alpine
COPY --from=builder /app ./
EXPOSE 3001
CMD ["yarn", "ts-start"]