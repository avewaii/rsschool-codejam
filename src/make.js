module.exports = function make(...args) {
	const arr = [];
	for (let i = 0; i < args.length; i++) {
		if (typeof args[i] == 'function') {
			return arr.reduce(args[i]);
		} else {
			arr.push(args[i]);
		}
	}
	return make.bind(null, ...arr);
};
