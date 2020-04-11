#!/usr/bin/env bash

# abort on errors
set -e

# build
npm run build:rss

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'tripleagamingpodcast.com' > CNAME

git init
git add -A
git commit -m 'New episode - deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:OmarGM2294/podcast_holder.git master:gh-pages

cd -

git add .
git commit -m "New episode - deploy"
git push origin master