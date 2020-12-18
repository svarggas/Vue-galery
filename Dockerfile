##########
# Stage 1
##########

# Build Vue App inside temporary container and Deploy with alpine flavor
FROM node:carbon-alpine as builder

# Try creating everyting from dockerfile

# Set work directory and copy files from actual directory
WORKDIR /usr/src/app
COPY . ./

#Install dependencies of the project
RUN npm install

# Build the proyect for production purposes
RUN npm run-script build

##########
# Stage 2
##########

# Deploy with NGNIX, directing to alpine
FROM nginx:1.15.2-alpine

# Copy files from "builder"(node:carbon-alpine) 
COPY --from=builder /usr/src/app/dist /var/www

# Copy nginx config file 
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port to access
EXPOSE 3000

# Run daemon for proxy server
ENTRYPOINT ["nginx","-g","daemon off;"]