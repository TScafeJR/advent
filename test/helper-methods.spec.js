const {expect} = require('chai');
const helperMethods = require('../src/helper-methods/helper-methods');

describe('sumNumbers', () => {
    const { sumNumbers } = helperMethods;

    it('adds two numbers together', () => {
        expect(sumNumbers(2,2)).to.eql(4);
    });
});
