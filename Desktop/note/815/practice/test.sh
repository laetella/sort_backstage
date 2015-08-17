#!/bin/bash
# echo "installing,waitting...";
# echo "input the path:";

# npm init;
git init
rm -rf .git
git add .
git commit -m "first commit"
git rm remote
git remote add origin https://github.com/laetella/install.git
git push -u origin master
