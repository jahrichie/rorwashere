# Use the official nginx image as base
FROM nginx:alpine

# Copy custom nginx configuration to disable caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all static files to nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]


