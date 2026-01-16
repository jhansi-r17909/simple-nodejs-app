
# Stage 1: Build Stage

FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the app
COPY . .


# Stage 2: Production Stage

FROM node:20-alpine AS production

WORKDIR /app

# Copy only the necessary files from build stage
COPY --from=build /app ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
