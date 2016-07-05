# salesforce-development-2016
Salesforce development template 2016

## Table of Contents
- [Requirements](#requirements)
- [Usage](#usage)
- [Link](#link)

## Requirements
- MavensMate for Sublime Text v7.0.0-beta.3 ~
- Node v6.0.0 ~
- npm v3.6.0 ~
- gibo v1.0.4 ~
- foreman v0.81.0 ~

## Usage
create .env file (app/.env)
```
SF_USERNAME=<SFDC USER ID>
SF_PASSWORD=<SFDC USER PASSWORD>
```

write app/pkg/package.xml  
- members = deploy target file name
```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>YOUR_MEMBERS</members>
        <name>StaticResource</name>
    </types>
    <version>37.0</version>
</Package>

```

npm install
```
$ cd app
$ npm install
```

gulp command
```
$ cd app
// Static Resources Fild Build
$ gulp build-staticresources
// SFDC Deploy
$ foreman run gulp deploy
```

bower support
```
$ cd app
$ cd bower install
```

## Link
- http://tyoshikawa1106.hatenablog.com/entry/2016/07/03/162802
