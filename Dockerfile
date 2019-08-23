FROM node:10-alpine

# Metadata Information
LABEL Name="dashboard-client"
LABEL maintener="example@example.com"
LABEL version="1.0"

# workspace directory
WORKDIR /usr/src/client

# Install packages
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Copy the App
COPY . .

EXPOSE 3000

CMD yarn start-prod