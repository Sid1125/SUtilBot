FROM node:19.6.0
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
CMD [ "node", "bot.js" ]
EXPOSE 8080
