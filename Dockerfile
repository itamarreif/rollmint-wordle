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

# copy the binary from builder into rollmint image
COPY --from=builder /go/bin/wordled /

# init chain
ENV VALIDATOR_NAME=validator1
ENV CHAIN_ID=wordle

RUN wordled tendermint unsafe-reset-all
RUN wordled init $VALIDATOR_NAME --chain-id $CHAIN_ID


EXPOSE 2121