var ee = {
	events : {},
	listeners: {}
};
exports.EventEmitter = function() { return ee };



ee.on = function (evt, cb){
	if(!this.listeners[evt]){
		this.listeners[evt] = [];
	}

	this.listeners[evt].push(cb);
};

ee.emit = function (evt) {
	var args = [];
	for(var i=1; i<arguments.length; i++){
		args.push(arguments[i]);
	}
	//console.log(args);

	for(var k in this.listeners[evt]){
		this.listeners[evt][k].apply(this, args);
	}
};