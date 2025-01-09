const functions = [x => x + 1, x => x * x, x => 2 * x]
var compose = function(functions) {
	return function(x) {
		if (!functions.length) return x;
		return functions.reduceRight((accum, fn) => fn(accum), x);
	}
};


const fn = compose(functions)
console.log(fn(4)) // 65


