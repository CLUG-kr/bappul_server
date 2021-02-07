docker login --username AWS -p $(aws ecr get-login-password --region ap-northeast-2) 511624941057.dkr.ecr.ap-northeast-2.amazonaws.com
docker build -t 511624941057.dkr.ecr.ap-northeast-2.amazonaws.com/testserver:0.1.2 . --no-cache
docker push 511624941057.dkr.ecr.ap-northeast-2.amazonaws.com/testserver:0.1.2