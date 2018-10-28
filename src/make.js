module.exports = function make(...args) {
	let arr = [];
	for (i = 0; i < args.length; i++) {
		if (typeof args[i] == 'function') {
			return arr.reduce(args[i]);
		} else {
			arr.push(args[i]);
			return make.bind(null, ...args);
		}
	}
};
