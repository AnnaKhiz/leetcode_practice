var expect = function(val) {
	return {
		toBe(valueToBe) {
			switch (true) {
				case val instanceof Function || valueToBe instanceof Function:
					return true
				case !val && typeof val !== 'number' || !valueToBe && typeof valueToBe !== 'number' :
					throw new Error('Not Equal')
				case typeof val === 'string' || typeof valueToBe === 'string)':
					if (Number.isNaN(val) || Number.isNaN(valueToBe)) {
						if (val.localeCompare(valueToBe) !== 0) {
							throw new Error('Not Equal')
						} 
						return true
					
					} else {
						if (val !== valueToBe) {
							throw new Error('Not Equal')
						} 
						return true	
					};
				case  typeof val === 'object' || typeof valueToBe === 'object':
						if (JSON.stringify(val) !== JSON.stringify(valueToBe) || !Object.is(val, valueToBe)) {
							throw new Error('Not Equal')
						} 
						return true
				default:
						if (isNaN(val) || isNaN(valueToBe)) {
							throw new Error('Not Equal')
						}
						return val === valueToBe
				}
			},

		notToBe(valueNotToBe) {
			if (valueNotToBe !== null && val === valueNotToBe ) {
				throw new Error('Equal')
			}
			return val !== valueNotToBe
		}
	}
};

//cases
const o = {}; 
expect(o).toBe(o)

expect(5).toBe(5)
expect('100%').toBe('50%')
expect({}).notToBe({})
expect(5).toBe(null)
expect(5).notToBe(null)
expect(NaN).notToBe(NaN)
expect(Function).notToBe(Function)
expect(true).notToBe(false)
expect(0).notToBe(0)