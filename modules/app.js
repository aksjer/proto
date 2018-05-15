var Logger = require('./a');

var logger = new Logger();

var sym = Symbol('abc');

logger.on(sym, e => console.log(e));
logger.log(sym, 'hey');
