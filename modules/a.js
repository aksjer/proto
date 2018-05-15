var EventEmitter = require('events');
var emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(id, msg) {
    this.emit(id, msg);
  }
}

module.exports = Logger;
