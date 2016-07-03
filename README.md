# salesforce-development-2016
Salesforce development template 2016

## Table of Contents
- [Requirements](#Requirements)
- [Usage](#Usage)
- [Link](#Link)

## Requirements
- MavensMate for Sublime Text v7.0.0-beta.3 ~
- Node v6.0.0 ~
- npm v3.6.0 ~
- gibo v1.0.4

## Usage
create .env file
```app/.env
SF_USERNAME=<SFDC USER ID>
SF_PASSWORD=<SFDC USER PASSWORD>
```

npm install
```
$ cd app
$ npm install
```

gulp command
```
$ cd app
$ gulp build-staticresources
$ foreman run gulp deploy
```

bower support
```
$ cd app
$ cd bower install
```

## Link
- http://tyoshikawa1106.hatenablog.com/entry/2016/07/03/162802