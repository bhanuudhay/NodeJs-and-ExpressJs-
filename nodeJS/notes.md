require function to use modules
module info about current module
process info about the environment where program is being executed
(\_\_dirname) path to current directory
(\_\_filename) file name

builde in modules

os
http
path
fs // file system

in file system difference between readfile , writefile and readfileasync , writefileasync

in sync case everything is executing step by step

but in case of async whereever he sees async operating going on it skips that step and move further

to avoid from callback hell we use promises and async await operation

in dono meh sab same hai bas ek callback aa jata hai async meh as a third parameter

http module

sabsa pehla createserver aaya ga jo ki req.res leta hai as a callback

uska badh phir listen() kisi port pe chalana bhi toh hoga

agar ham html ke sath kuch content return krwana chaha toh yeh `  ` use krna pdta hai server meh

npm in node js

local dependency means use this package in this only

global dependency
npm install -g <packagename>
like this

package.json
manifest file store imp info about the project like project name etc...
manual approach create package.json in the root

npm init // same as jaisa reach meh npm cra hota hai

npm init -y (everything default)

how to push all these on github without uploading

1. git init
2. git add.
3. git commit -m "first commint"

package.json is very imp for any project

npm i nodemon -D
-D will save it as a dev dependency

if we are developing the app we add dependencies in to dev dependencies
and after completing the project we can add it in dependencies

################nodemon##########################

nodemon kya krta hai apne agar kahi pe kuch bhi change kiya toh apko project restart krna ki jarurat nhi
it will automatically detect and without rerunning it will execute the file

to uninstall a dependency

npm uninstall <dependency_name>

in any dependency version if 1st change means great change , second means minor and third means less minor

###################### Event loop ######################

The event loop Nodejs to perforn non-blocking or we can say that async operations without any restriction despite the fact that javascript is single threaded
by offloading operation in kernel

best exapmle for event loop

example having an app (famous)

when to many user req it register the call back and then in order of the task complete it execute the callback
so in this way no other user have to suffer

async in nodejs

Events in NodeJs

can be done in three parts

new eventEmmiter()

.on(name,callback())

.emit(name)

even though we dont use events in node js directly but nodejs heavinly used events.It is a event driven language

Streams

used to read or write sequentially

when we have to manipulate a big data like continous sourse

in this we have 4 -
writeable
readable
duplex - both
transform - data can be modified when writing or reading

problem arises : when the file data get bigger and bigger it can't be stored in the string
so we have to use streams for that


createreadStream

