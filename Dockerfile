FROM node:10

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
#RUN npm install --only=production

COPY .env ./

# Bundle app source
COPY ./src ./src

EXPOSE 3000

CMD [ "npm", "start" ]