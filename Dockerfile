# ~~~ builder image ~~~
FROM golang:1.19 as builder

# install additional OS packages.
RUN apt update && \
    apt upgrade -y

RUN apt-get install -y \
    build-essential \
    ca-certificates \
    curl

# install ignite cli
RUN curl https://get.ignite.com/cli! | bash

WORKDIR /usr/src

# Copy rest of files
COPY . .

# build chain with Ignite CLI
RUN ignite chain build

# ~~~ final image ~~~
FROM alpine:3.17

RUN apk add \
    curl \
    jq \
    # Add glibc compatibility needed to run wordled on Alpine Linux
    libc6-compat

# copy the binary from builder into rollmint image
COPY --from=builder /go/bin/wordled /bin
