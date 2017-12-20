# docker build & run
- docker build -t zhoujl/heroes-api .
- docker run --rm --name heroes-api -p 3000:3000 -d zhoujl/heroes-api

# docker-compose up -d 
- 放在部署程序同级目录执行