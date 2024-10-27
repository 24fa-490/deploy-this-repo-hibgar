# Use Node.js image as a build stage
FROM node:18 AS build

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean cache and install dependencies
RUN npm cache clean --force && npm ci

# Copy the rest of the application
COPY . .

# Expose the port Vite will use
EXPOSE 5173

# Build the application
RUN npm run build

# Use the official Node.js runtime image for the final container
FROM node:18

# Create app directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app .

# Expose the port
EXPOSE 5173

# Run the application
CMD [ "npm", "run", "dev" ]

