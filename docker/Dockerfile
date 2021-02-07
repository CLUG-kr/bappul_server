FROM ubuntu:16.04
LABEL version="0.0.1"

# Install git & node
RUN apt-get update
RUN apt-get install -y git curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Clone repository
run git clone https://github.com/CLUG-kr/bappul_server.git
WORKDIR bappul_server

# Start
COPY ormconfig.json ormconfig.json
COPY run.sh run.sh
RUN chmod +x run.sh