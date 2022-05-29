### STAGE 1: Build ###
# start from base
FROM node:16-alpine AS builder

# set working directory
WORKDIR /app

# copy the application code to the working directory
COPY package.json ./
COPY . /app

# fetch app specific dependencies
RUN yarn install
RUN yarn run build


### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
EXPOSE 80
COPY --from=builder /app/dist/manager /usr/share/nginx/html





