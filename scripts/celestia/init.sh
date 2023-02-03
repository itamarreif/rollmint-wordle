#!/bin/sh

/celestia light init \
    --p2p.network $CELESTIA_LC_P2P_NETWORK --node.store $CELESTIA_LC_NODE_STORE
/cel-key add $CELESTIA_LC_KEY_NAME \
    --keyring-backend $CELESTIA_LC_KEYRING_BACKEND --keyring-dir $CELESTIA_LC_NODE_STORE/keys \
    --node.type light --p2p.network $CELESTIA_LC_P2P_NETWORK
