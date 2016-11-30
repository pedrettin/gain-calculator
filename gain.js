let _ = require('underscore')

let gain_calc = {

	entropy: function (elm) {
		let sum = 0
		let ident = _.reduce(elm,(found,n) => {
			found[n] ? found[n] += 1 : found[n] = 1
			return found
		} ,{})
		var entropy = _.reduce(ident, (entr,n) => 
			entr += -(n/elm.length)*Math.log2(n/elm.length)
		,0)
		return entropy
	}

	gain: function (all, ...args) {
		let gain = entropy(all)
		gain -= _.reduce(args, (entr, arg) => {
			return entr += (arg.length/all.length)*entropy(arg)
		},0)
	}	

}

module.exports = gain_calc