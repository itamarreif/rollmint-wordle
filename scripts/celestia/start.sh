#!/bin/sh

celestia light start\
	--p2p.network $CELESTIA_LC_P2P_NETWORK --node.store $CELESTIA_LC_NODE_STORE\
	--core.ip $CELSTIA_LC_NODE_ADDR --gateway --gateway.addr $CELESTIA_LC_GATEWAY_ADDR --gateway.port $CELESTIA_LC_GATEWAY_PORT
