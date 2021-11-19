echo Lancement du bot, développer par zbi
call node index.js

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)