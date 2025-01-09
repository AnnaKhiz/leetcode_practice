
const nums = [1,2,8,3,10,23];
const init = 0;

var reduce = function(nums, fn, init) {
	let accum = init;

	if (!nums.length) return init;

	for (let i = 0; i < nums.length; i++) {
		if (nums.length === 1 && nums[i] === 0) return 0;

		const functionResult = fn(accum, nums[i]);
		if (!functionResult && typeof functionResult !== 'number') return init;
		accum = fn(accum, nums[i])
	}
	return accum;
};

reduce(nums, sum, init)

function simpleReduce(accum, curr) {
	return accum + curr;
}

function staticReturnValue(accum, curr) {
	return 0
}

function sum(accum, curr) {
	return accum + curr * curr;
}


function remindDivision(accum, curr) {
	return (curr + accum) % 2;
}

