#!/bin/bash

npm run build

cd dist

git init
git add -A

git commit -m 'Deploy to GitHub Pages'

git remote add origin https://github.com/Azamat4985/todo.git

git push -f origin main:gh-pages

cd -
