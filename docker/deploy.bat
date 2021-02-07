docker login —username AWS -p $(aws ecr get-login-password —region ap-northeast-2) 511624941057.dkr.ecr.ap-northeast-2.amazonaws.com
docker build -t 511624941057.dkr.ecr.ap-northeast-2.amazonaws.com/testserver:$1 .
docker push 511624941057.dkr.ecr.ap-northeast-2.amazonaws.com/testserver:$1