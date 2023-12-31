# Women's Club api

For start application:
1) install dependencies ```npm i```
2) run application ```npm run dev```


For start all project you need to install nginx and docker locally.

After installing write this configuration for nginx

```
server {
	listen 8080;
	server_name localhost;
	large_client_header_buffers 4 64k;
	proxy_read_timeout 300;
	proxy_connect_timeout 300;
	proxy_send_timeout 300;
	proxy_buffering off;
	client_body_buffer_size 10M;
	
	location / {
	  proxy_pass http://localhost:3000;
  	  proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
 	}

	 location /api {
	  proxy_pass http://localhost:4444;
	  proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;	
	}

    location /api/reload {
        internal;
        proxy_pass http://localhost:4444/reload;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

	location /admin {
	  proxy_pass http://localhost:4000;
	  proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
	}


}
```

And restart nginx.

Run ```docker-compose up --build```

And start all apps in project
