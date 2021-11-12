const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
	constructor() {
		super(0);
		this.total = 0;
	}
	setTotal(newTotal) {
		return this.total = newTotal;
	}
	modulo(num) {
		return this.total = this.total % num;
	}
	squared() {
		return this.total**2;
	}
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
