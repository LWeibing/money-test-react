#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@github.com:LWeibing/money-website-react.git &&
git push -u origin master -f
cd -