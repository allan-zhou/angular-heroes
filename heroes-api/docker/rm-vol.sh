#!/bin/bash

function rmAllVolumn(){
    VolumeNames=$(docker volume ls -q)
	echo
        if [ -z "$VolumeNames" -o "$VolumeNames" = " " ]; then
                echo "========== No Volumes available =========="
        else
                echo "========== rm Volumes start =========="
                docker volume rm $VolumeNames
                echo "========== rm Volumes end =========="
        fi
	echo
}

rmAllVolumn

