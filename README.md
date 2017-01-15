# Learnr
*A project at HackUCI 2017*

## Setup
* `npm install -g cordova ionic`
* `npm install`
* Set Ionic Cloud App ID in `.io-config.json`, `ionic.config.json`, and `/www/js/app.js`
* Set Ionic Cloud API Key in `.io-config.json`
* Set Firebase Sender ID in `config.xml` and `/www/js/app.js`
* Replace `www.example.com` in HTTP requests in `/www/js/controllers.js`

## Running in browsers
* `ionic serve -c`
* Push notification is currently not working

## Building for iOS
* `ionic platform add ios`
* `ionic build ios`

## Building for Android
* `ionic platform add android`
* `ionic build android`
