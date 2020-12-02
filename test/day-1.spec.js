const {expect} = require('chai');
const day1Methods = require('../src/solutions/day-1');

describe('Day 1', () => {
    describe('findPairThatSumToNum', () => {
        const { findPairThatSumToNum } = day1Methods;

        it('returns an arr of numbers with a length of 2', () => {
            const inputArr = [0,1,2,3,4,5,6,7,8];
            const sumTarget = 7;

            const pair = findPairThatSumToNum(inputArr, sumTarget);
            expect(pair).to.be.an('array').with.length(2);
        });

        it('returns an arr of numbers that equal the target sum', () => {
            const inputArr = [4,5,6];
            const sumTarget = 10;

            const pair = findPairThatSumToNum(inputArr, sumTarget);
            const sum = pair[0] + pair[1];
            expect(sum).to.eql(sumTarget);
        });

        it('does not include duplicate numbers', () => {
            const inputArr = [4,2,4,5,6];
            const sumTarget = 10;

            const pair = findPairThatSumToNum(inputArr, sumTarget);
            expect(pair[0]).to.not.eql(pair[1]);
        });
    });

    describe('findTrioThatSumToNum', () => {
        const { findTrioThatSumToNum } = day1Methods;
        const {} = require('../src/helper-methods/helper-methods');

        it('returns an arr of numbers with a length of 3', () => {
            const inputArr = [0,1,2,3,4,5,6,7,8];
            const sumTarget = 3;

            const trio = findTrioThatSumToNum(inputArr, sumTarget);
            expect(trio).to.be.an('array').with.length(3);
        });

        it('returns an arr of numbers that equal the target sum', () => {
            const inputArr = [0,1,2,3,4,5,6,7,8];
            const sumTarget = 11;

            const trio = findTrioThatSumToNum(inputArr, sumTarget);
            const sum = trio.reduce((a,b) => a+b);

            expect(sum).to.eql(sumTarget);
        });

        it('does not include duplicate numbers', () => {
            const inputArr = [0,1,2,3,4,5,6,7,8];
            const sumTarget = 11;

            const trio = findTrioThatSumToNum(inputArr, sumTarget);
            const setLength = new Set(trio).size;
            const trioLength = trio.length;

            expect(setLength).to.eql(trioLength);
        });
    });

    describe('day1SolutionPt1', () => {
        const { day1SolutionPt1, findPairThatSumToNum } = day1Methods;

        it('returns the product of the target sum', () => {
            const inputArr = [4,2,4,5,6];
            const sumTarget = 10;

            const pair = findPairThatSumToNum(inputArr, sumTarget);
            const product = pair[0]*pair[1];

            const pairProduct = day1SolutionPt1(inputArr, sumTarget);

            expect(pairProduct).to.eql(product);
        });
    });
})
