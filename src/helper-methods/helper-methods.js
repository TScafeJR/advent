const sumNumbers = (num1, num2) => {
    return (num1 + num2);
}

const sumArr = arrNums => {
    return arrNums.reduce(sumNumbers, 0);
}

const multiplyNums = (num1, num2) => {
    return (num1 * num2);
}

const multiplyArr = arrNums => {
    return arrNums.reduce(multiplyNums, 1);
}

module.exports = {
    sumNumbers,
    sumArr,
    multiplyNums,
    multiplyArr
}
