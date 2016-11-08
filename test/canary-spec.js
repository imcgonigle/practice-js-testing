const chai = require('chai');

chai.should();

describe('Canary test', () => {
	it('five should be equal to 5', () => {
		const five = 5;
		five.should.equal(5);
	});
	it('five should be a number', () => {
		const five = 5;
		five.should.be.a('number')
	})
});
