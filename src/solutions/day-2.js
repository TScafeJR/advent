const { sumArr } = require('../helper-methods/helper-methods');

const parsePsw = (inputString) => {
    const [occurString, letter, psw] = inputString.split(' ');
    const [firstCondition, secondCondition] = occurString.split('-');

    return {
        firstCondition,
        secondCondition,
        letter: letter.replace(':', ''),
        psw
    }
}

const meetsPt1Criteria = pswObj => {
    const {firstCondition: minOccur, secondCondition: maxOccur, letter, psw} = pswObj;
    const letterArr = psw.split('');

    const filteredArr = letterArr.filter(l => letter === l);
    const occuranceInPsw = filteredArr.length;
    return occuranceInPsw >= minOccur && occuranceInPsw <= maxOccur
};

const meetsPt2Criteria = pswObj => {
    const {firstCondition: firstIndex, secondCondition: secondIndex, letter, psw} = pswObj;
    const letterArr = psw.split('');

    const firstLetter = letterArr[firstIndex - 1];
    const secondLetter = letterArr[secondIndex - 1];

    return (firstLetter !== letter && secondLetter !== letter) ?
        false :
        !(firstLetter === letter && secondLetter === letter);
}

const day2Solution = (inputArr, criteraMethod) => {
    const arr = inputArr.map(inputString => criteraMethod(parsePsw(inputString)) ? 1 : 0);
    return arr.reduce(sumArr);
}

module.exports = {
    parsePsw,
    day2Solution,
    meetsPt2Criteria,
    meetsPt1Criteria
};
