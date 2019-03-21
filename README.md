# Questrade API Sandbox

Using https://github.com/leanderlee/questrade to authorize and make requests to Questrade's API. This library was recommended here: https://www.reddit.com/r/Questrade/comments/b38c7c/questrade_api_authentication_problem/

## Details

* Generate a refresh token:
  * Go here: https://login.questrade.com/APIAccess/userapps.aspx
  * Add a new device if one is not already added
  * Click `Generage new token`
  * Make note of the generated `Refresh token`
* Open `index.js` and paste the refresh token inside the `Questrade` constructor:
```
var qt = new Questrade('<refresh token>');
```
* The questrade library will exchange the refresh token with an access token, then store the new refresh token in the `keys` folder like this:
  * File name: original refresh token
  * File content: next refresh  token

## Testing
* Run index.js:
  * `node index.js`

## Debug
* Debug in VSCode: https://www.youtube.com/watch?v=2oFKNL7vYV8

## Inspect HTTP requests with Fiddler
* Borrowed from here: https://weblogs.asp.net/dixin/use-fiddler-with-node-js
* In Windows command line (cmd.exe), set these environment variables:
```
set https_proxy=http://127.0.0.1:8887
set http_proxy=http://127.0.0.1:8887
set NODE_TLS_REJECT_UNAUTHORIZED=0
```
* Notes:
  * Use the correct proxy port set in Fiddler
  * Setting environment variables above doesn't work in Powershell, so use cmd.exe
  * These are local environment variables, so closing the cmd window will wipe them out
* Run `node index.js` and HTTP requests will proxy through Fiddler
