/**
 * Lt Standard fcts
 * @module lib/ltfct
 * @exports Fcts to public namespace
 */

defaultErrCb = function(err) {
	if (err) {
		console.log(err)
		return false;
	} else {
		return true;
	}
}