# Ubackend Dockerfile
# FROM node:18
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY . .

# Install dependencies
RUN npm install 


# Expose port (default Node.js port)
EXPOSE 3000

# Command to run the application
CMD ["node", "main.js"]