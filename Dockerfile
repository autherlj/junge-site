FROM docker.io/hugomods/hugo:debian-exts-0.152.2

# 设置 Go 代理（国内镜像源）
ENV GOPROXY=https://goproxy.cn,direct
ENV GOSUMDB=off

# 安装 Git 和常用系统工具
RUN apt-get update && \
    apt-get install -y \
    git \
    procps \           
    net-tools \        
    iputils-ping \     
    curl \             
    wget \            
    vim \              
    nano \             
    htop \             
    lsof \             
    file \             
    tree \            
    jq \               
    less \            
    ca-certificates && \
    git config --global --add safe.directory /src && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
