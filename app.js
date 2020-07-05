const http = require('http'); 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World'); 
        res.end();  
    }
    
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3,4])); 
        res.end() 
    }
}); 
 
server.listen(3000); 
console.log('Listening on port 3000...'); 


































//Below contains code from the other parts of the tutorial video from Mosh// 

/* function sayHello(name) {
    console.log('Hello ' + name); 
} 

// sayHello('Mosh'); 
console.log(window); 

const logger = require('./logger.js');  

console.log(logger); 

logger = 1; 
  

logger.log('message'); 

const path = require('path') 
var pathObj = path.parse(__filename); 
console.log(pathObj); 


const os = require('os'); 
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);
console.log(`Total Memory: ${totalMemory}`); 
console.log(`Free Memory: ${freeMemory}`); 
*

const fs = require('fs'); 
 

//console.log(fs.readdirSync('./')); 
 


fs.readdir('$', function(err, files) { 
if(err) console.log('Error', err); 
else console.log('Result', files)
}); 

 ///// 

 const EventEmitter = require('events'); 
 
 


const Logger = require('./logger'); 
const logger = new Logger(); 

logger.on('messageLogged', (arg) => { 
    console.log('Listener called', arg)
    }); 

logger.log('message'); 

 

 //Raise and event called logging (data: message); 

 


const http = require('http'); 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end();  
    }
    
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3,4])); 
        res.end() 
    }
}); 
 
server.listen(3000); 
console.log('Listening on port 3000...'); 

*/ 


































//Below contains code from the other parts of the tutorial video from Mosh// 

/* function sayHello(name) {
    console.log('Hello ' + name); 
} 

// sayHello('Mosh'); 
console.log(window); 

const logger = require('./logger.js');  

console.log(logger); 

logger = 1; 
  

logger.log('message'); 

const path = require('path') 
var pathObj = path.parse(__filename); 
console.log(pathObj); 


const os = require('os'); 
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);
console.log(`Total Memory: ${totalMemory}`); 
console.log(`Free Memory: ${freeMemory}`); 
*

const fs = require('fs'); 
 

//console.log(fs.readdirSync('./')); 
 


fs.readdir('$', function(err, files) { 
if(err) console.log('Error', err); 
else console.log('Result', files)
}); 

 ///// 

 const EventEmitter = require('events'); 
 
 


const Logger = require('./logger'); 
const logger = new Logger(); 

logger.on('messageLogged', (arg) => { 
    console.log('Listener called', arg)
    }); 

logger.log('message'); 

 

 //Raise and event called logging (data: message); 

 */ 


