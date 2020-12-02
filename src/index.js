const day1Input = require('./data/day1-input.json');
const day2Input = require('./data/day2-input.json')
const { day1SolutionPt1, day1SolutionPt2 } = require('./solutions/day-1');
const { day2Solution, meetsPt1Criteria, meetsPt2Criteria } = require('./solutions/day-2');

console.log(`The day 1 solution for pt 1 is: ${day1SolutionPt1(day1Input, 2020)}`);
console.log(`The day 1 solution for pt 2 is: ${day1SolutionPt2(day1Input, 2020)}`);
console.log(`The day 2 solution for pt 1 is: ${day2Solution(day2Input, meetsPt1Criteria)}`)
console.log(`The day 2 solution for pt 2 is: ${day2Solution(day2Input, meetsPt2Criteria)}`)
