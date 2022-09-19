FROM node:12
WORKDIR /app
COPY . /app
RUN npm install --production
CMD ["node", "index.js"]
EXPOSE 3000
