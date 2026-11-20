FROM mcr.microsoft.com/playwright:v1.61.0-noble

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the remaining project files
COPY . .

# Run all Playwright tests
CMD ["npx", "playwright", "test"]
