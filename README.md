# Node.js & Express.js Basics

## Overview

This document summarizes the core concepts of **Node.js** and **Express.js**, covering built-in modules, asynchronous operations, npm, event loops, and streams.

---

## Node.js Core Concepts

### 1. **Modules in Node.js**
   - **`require` function**: Used to import modules in Node.js.
   - **Module Information**:
     - `__dirname` → Path to the current directory.
     - `__filename` → Path to the current file.
   - **Process Information**: Provides details about the environment where the program is executed.

### 2. **Built-in Modules in Node.js**
   - **`os`** → Operating system-related utilities.
   - **`http`** → Creates servers and handles HTTP requests.
   - **`path`** → Manages file and directory paths.
   - **`fs`** (File System) → Handles file operations.

### 3. **File System Operations**
   - **Synchronous vs Asynchronous**
     - **Synchronous (`readFileSync`, `writeFileSync`)**: Executes step by step, blocking further execution.
     - **Asynchronous (`readFile`, `writeFile`)**: Skips async operations and continues execution.

   - **Why Use Asynchronous Methods?**
     - Prevents blocking operations.
     - Improves performance and responsiveness.

### 4. **Callback Hell & Promises**
   - Callbacks in async operations can lead to **callback hell** (nested callbacks).
   - To avoid this, we use **Promises** and `async/await`.
   - Both work similarly, but **async/await** provides cleaner syntax by eliminating callbacks.

---

## HTTP Module

### Steps to Create a Server
1. **`createServer()`**: Takes a callback with `req, res` to handle requests.
2. **`listen(port, callback)`**: Starts the server on a specified port.
3. **Returning HTML Content**:
   - Use backticks `` ` ` `` for multi-line HTML responses.

Example:
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.write(`<h1>Welcome to Node.js Server</h1>`);
  res.end();
});
server.listen(5000, () => console.log("Server running on port 5000"));

````
## NPM (Node Package Manager)
Types of Dependencies

Local Dependency: Used only in the current project.

Global Dependency: Installed globally using:

````
npm install -g <package-name>

````
# package.json

- Manifest file storing project details

- Ways to Create package.json :

  ````
  npm init       # Step-by-step manual setup
  npm init -y    # Create with default values
  ````

# Versioning in Dependencies

- 1.0.0 → Major update.

- 1.1.0 → Minor update.

- 1.1.1 → Patch update.

# Important Commands

- Install nodemon as a dev dependency:
   ````
  npm install nodemon -D
   
  ````

- Uninstall a dependency:
  ````
  npm uninstall <package-name>

  ````

# Nodemon

- Automatically restarts the server when changes are detected.

- No need to manually restart the server after each change.

# Event Loop in Node.js

- Handles non-blocking async operations in JavaScript.

- Offloads tasks to the kernel and executes callbacks once tasks are completed.

# Example of Event Loop in Action

- A server receives multiple requests.

- The event loop registers callbacks.

- Executes them in order when tasks complete.

- No user request gets delayed.

# Events in Node.js

Steps to Use Events:

- Create an event emitter:
````
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

````

- Listen for an event:
````
eventEmitter.on('greet', () => {
  console.log('Hello, User!');
});

````

- Trigger the event:
````
eventEmitter.emit('greet');

````

- Node.js is event-driven, even though we rarely use events directly.


# Streams in Node.js

- Used to read/write data sequentially.

- Efficient for handling large files or continuous data sources.

# Types of Streams

- Writable - Write operations.

- Readable - Read operations.

- Duplex - Both read and write.

- Transform - Modify data during read/write.

# Why Use Streams?

- Avoids memory overload when handling large files.

- Prevents loading the entire file into memory.

Example:

````
const fs = require('fs');
const stream = fs.createReadStream('./largeFile.txt', 'utf8');
stream.on('data', (chunk) => {
  console.log(chunk);
});

````

# Summary

- Learned Node.js and Express.js basics.

- Explored core modules (fs, http, path, etc.).

- Understood synchronous vs asynchronous operations.

- Covered callback hell, promises, and async/await.

- Studied NPM, event loop, events, and streams.

- Practiced Git/GitHub workflow.

# Penned down by Bhanu Udhay Singh.
