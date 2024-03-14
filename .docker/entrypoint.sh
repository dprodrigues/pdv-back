#!/bin/bash

if [ -d "./node_modules" ];
then
  echo "Starting application"
  npm run dev
else
  echo "Installing dependencies"
  npm install
  echo "Starting application"
  npm run dev
fi
