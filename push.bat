@echo off
set /p commit=commit:
title auto commit
git add .
git commit -m "%commit%"
git push

pause