#!/bin/bash

# install it (via local link)
npm i
npm link ../.

npx serverless --help | grep AwsAlb > /dev/null 2>&1
if [[ $? != 0 ]]; then
  echo "failed to install plugin"
  exit 1
fi
