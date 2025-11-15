#!/bin/bash

echo "Building project..."
npm run build

if [ $? -eq 0 ]; then
  echo "Build successful! Pushing to git..."
  date=$(date +"%Y-%m-%d %H:%M:%S")
  git add .
  git commit -m "Auto-commit: $date"
  git push origin main
else
  echo "Build failed! Aborting push."
  exit 1
fi
