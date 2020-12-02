const { sumArr, multiplyArr } = require('../helper-methods/helper-methods');

const findPairThatSumToNum = (numList, sumTarget) => {
    for (let i = 0; i < numList.length; i++) {
        for (let j = i + 1; j < numList.length; j++) {
            const numArr = [
                numList[i],
                numList[j]
            ]

            if (sumArr(numArr) === sumTarget) {
                return numArr
            }
        }
    }
}

const findTrioThatSumToNum = (numList, sumTarget) => {
    for (let i = 0; i < numList.length - 2; i++) {
        let l = i + 1;
        let r = numList.length - 1;

        while (l < r) {
            const numArr = [numList[i], numList[l], numList[r]];
            if (sumArr(numArr) === sumTarget) {
                return numArr
            } else if (sumArr(numArr) < sumTarget) {
                l += 1
            } else {
                r -= 1
            }
        }
    }
}

const day1SolutionPt1 = (inputData, targetSum) => {
    const pairs = findPairThatSumToNum(inputData, targetSum);
    return multiplyArr(pairs);
}

const day1SolutionPt2 = (inputData, targetSum) => {
    const sortedInputData = inputData.sort((a, b) => a - b)
    const trios = findTrioThatSumToNum(sortedInputData, targetSum);
    return multiplyArr(trios);
}

module.exports = {
    findPairThatSumToNum,
    findTrioThatSumToNum,
    day1SolutionPt1,
    day1SolutionPt2
}
