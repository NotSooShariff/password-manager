# .bat file for Windows:
# @echo off
# set /p message=Enter commit message: 
# git add .
# git commit -m "%message%"
# git push origin main


.PHONY: gt

gt:
	@call git-push.bat

r:
	@call browse.bat
	npm run dev
	

