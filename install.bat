echo Lancement du bot, développer par zbi
call npm i discord.js fs discord-backup figlet quick.db js-yaml node-fetch axios

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)