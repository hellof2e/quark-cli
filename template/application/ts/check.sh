#!/bin/bash
APPID="App123Service"

count=`ps -efww | grep "node /workspace/carkey/$APPID" | grep -v "grep" | wc -l`
if [ 0 == $count ];
then
  echo 'error!'
else
  echo 'success';
fi