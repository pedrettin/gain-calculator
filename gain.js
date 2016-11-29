let _ = require('underscore')

function entropy (elm) {
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

function gain (all, left, right) {
	return entropy(all) - ((left.length/all.length)*entropy(left) + (right.length/all.length)*entropy(right))
}