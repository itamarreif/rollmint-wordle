#!/bin/sh

wordled keys add $KEY_NAME --keyring-backend $KEYRING_BACKEND
wordled add-genesis-account $KEY_NAME $TOKEN_AMOUNT --keyring-backend $KEYRING_BACKEND
wordled gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID --keyring-backend $KEYRING_BACKEND
wordled collect-gentxs