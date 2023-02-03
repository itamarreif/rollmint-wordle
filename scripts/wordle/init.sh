#!/bin/sh

wordled tendermint unsafe-reset-all
wordled init $WORDLE_VALIDATOR_NAME --chain-id $WORDLE_CHAIN_ID
