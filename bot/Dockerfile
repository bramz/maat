# start from base
FROM node:16-alpine

# set working directory
WORKDIR /app

# copy the application code to the working directory
COPY package.json /app
COPY . /app

# fetch app specific dependencies
RUN yarn install

# Start the bot.
CMD ["yarn", "start"]