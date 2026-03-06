# Use official Node image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source code
COPY . .

# Build TS
RUN npm run build

# Expose port
EXPOSE 3000

# Run server
CMD ["node", "dist/api/server.js"]