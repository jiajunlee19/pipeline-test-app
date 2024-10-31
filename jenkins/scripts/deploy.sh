#!/usr/bin/env sh

set -e

echo '[info] Deploying ...'

echo '[info] npm run start'
# npm run start
echo 'npm run start' &
sleep 1
echo $! > .pidfile
echo 'Current running pid is ' + $!

echo '[info] Deploy Completed !'