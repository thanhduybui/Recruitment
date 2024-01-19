
FROM node:21-alpine

WORKDIR /app

# Copy only the necessary files for npm install
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 3000

# Build the TypeScript files and create the production build
RUN npm run build

CMD ["npm", "start"]