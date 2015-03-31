#Simple AS3 Project

A simple Actionscript 3 project using Grunt to compile, serve and debug the Flash movie.

###Motivation:
Frequently I need to try out some new AS3 code in an isolated, simplified environment. This project facilitates that workflow by providing a very basic AS3 project that can be edited and debugged with a terminal, text editor, and browser.   

###Requirements:
* Node JS
* Flex SDK - [Adobe Download], [NPM Flex-SDK]

###Setup and Configuration:
run 'npm install' to install node dependencies

The path to your instance of the Flex SDK must be configured in one of the following:
* 'package.json'
* environment variable 'FLEX_SDK'
* --sdk param to grunt

###Grunt Tasks:
* Default - build swf
* serve - build swf and serve host page that embeds swf.
* debug - connect to fdb (flash debugger). Requires either 'grunt serve' is already running or another service is hosting the test page (pass --host='path to host' to 'grunt debug'). Requires building SWF with debug flag true and using the [Flash debug player] in the browser.

###Todo:
Test Framework Integration

[Adobe Download]:http://www.adobe.com/devnet/flex/flex-sdk-download-all.html
[NPM Flex-SDK]:https://www.npmjs.com/package/flex-sdk
[Flash debug player]:https://www.adobe.com/support/flashplayer/downloads.html