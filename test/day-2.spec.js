const {expect} = require('chai');
const day2Methods = require('../src/solutions/day-2');

describe('Day 2', () => {
    describe('parsePsw', () => {
        const { parsePsw } = day2Methods;

        it('returns an object with the expected fields', () => {
            const inputString = '1-3 a: abcde';
            const expectedKeys = ['firstCondition', 'secondCondition', 'letter', 'psw'];

            const returnObj = parsePsw(inputString);

            expect(returnObj).to.be.an('object').with.all.keys(expectedKeys);
        });
    });

    describe('meetsPt2Criteria', () => {
        const { meetsPt2Criteria } = day2Methods;

        it('returns false if the first letter and second letter are not right', () => {
            const testObj = {
                firstCondition: 1,
                secondCondition: 4,
                letter: 'd',
                psw: 'adda'
            }

            const result = meetsPt2Criteria(testObj);

            expect(result).to.be.false;
        });

        it('returns false if the first letter and second letter are the search letter', () => {
            const testObj = {
                firstCondition: 1,
                secondCondition: 4,
                letter: 'd',
                psw: 'dddd'
            }

            const result = meetsPt2Criteria(testObj);

            expect(result).to.be.false;
        });

        it('returns true if it meets the criteria', () => {
            const testObj = {
                firstCondition: 1,
                secondCondition: 4,
                letter: 'd',
                psw: 'ddda'
            }

            const result = meetsPt2Criteria(testObj);

            expect(result).to.be.true;
        });
    });
});
