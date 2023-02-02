#!/bin/sh

ignite chain build
wordled tendermint unsafe-reset-all
wordled init $VALIDATOR_NAME --chain-id $CHAIN_ID
