var ee = require("../EventEmitter");

console.log(ee);

var test = new ee.EventEmitter();

test.on('data', function (a, b) { console.log('ondata fired', arguments); });


var a = 'request';
var b = 'response';
test.emit('data', a, b);