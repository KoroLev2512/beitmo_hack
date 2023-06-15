# stage1 as builder
FROM node:lts-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui
WORKDIR /nextjs-ui
COPY . .

# Build the project and copy the files
RUN npm run build
RUN npm run export
FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /nextjs-ui/build /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]