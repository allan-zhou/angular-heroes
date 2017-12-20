#!/bin/bash

function rmContainer(){
    IDS=$(docker ps -aq)
	echo
        if [ -z "$IDS" -o "$IDS" = " " ]; then
                echo "========== No Container available =========="
        else
                echo "========== rm Container start =========="
                docker rm -f $IDS
                echo "========== rm Container end =========="
        fi
	echo
}

rmContainer

