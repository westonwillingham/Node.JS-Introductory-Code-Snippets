<<<<<<< HEAD

const EventEmitter = require('events'); 
//var url = "http://mylogger.io/log"; 


class Logger extends EventEmitter {
    log(message) { 
        console.log(message);  
        this.emit('messageLogged', { id: 1}); 
    }
}    



module.exports = log;  

=======

const EventEmitter = require('events'); 
//var url = "http://mylogger.io/log"; 


class Logger extends EventEmitter {
    log(message) { 
        console.log(message);  
        this.emit('messageLogged', { id: 1}); 
    }
}    



module.exports = log;  

>>>>>>> a4d26335a1186cda94d639850bfd5c9cd79c09ee
