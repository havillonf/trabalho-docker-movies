# Build stage
FROM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve stage
FROM nginx:1.25.1

# Copy the custom nginx.conf file to the container
COPY .docker/nginx.conf /etc/nginx/nginx.conf

# Copy the built React app from the build stage to the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 5173 - vite
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]