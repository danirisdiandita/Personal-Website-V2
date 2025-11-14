#!/bin/bash

date=$(date +"%Y-%m-%d %H:%M:%S")
git add .
git commit -m "Auto-commit: $date"
git push origin main
