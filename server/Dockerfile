FROM node:18
RUN mkdir -p /svr/app
WORKDIR /svr/app
RUN npm i -g @nestjs/cli --silent
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm install 
COPY . .
# Value set in .env file.
EXPOSE 8080
CMD ["npm", "run", "start"]