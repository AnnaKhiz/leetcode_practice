var createCounter = function(init) {
	let counter = init;
    return {
			increment() {
				return ++counter;
			},
			decrement() {
				return --counter;
			},
			reset() {
				return counter = init;
			}
		}
};

const counter = createCounter(5)
console.log('increment', counter.increment()); // 6
console.log('reset', counter.reset()) // 5
console.log('decrement', counter.decrement()) // 4