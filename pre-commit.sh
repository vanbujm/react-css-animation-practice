#!/usr/bin/env bash
# pre-commit.sh
git stash -q --keep-index
yarn run test
RESULT=$?
git stash pop -q
[ $RESULT -ne 0 ] && exit 1
yarn run build && git add build
exit 0
