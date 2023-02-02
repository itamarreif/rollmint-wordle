#!/bin/sh

wordled keys add $WORDLE_KEY_NAME --keyring-backend $WORDLE_KEYRING_BACKEND
wordled add-genesis-account $WORDLE_KEY_NAME $WORDLE_TOKEN_AMOUNT --keyring-backend $WORDLE_KEYRING_BACKEND
wordled gentx $WORDLE_KEY_NAME $WORDLE_STAKING_AMOUNT --chain-id $WORDLE_CHAIN_ID --keyring-backend $WORDLE_KEYRING_BACKEND
wordled collect-gentxs