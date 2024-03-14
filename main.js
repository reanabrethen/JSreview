const returnEmptyString = function () {
    return ""
};

const returnZeroNumber = function () {
    return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnString = function (str) {
    return str
};

const addition = function (x, y) {
    return x + y
};

const subtraction = function (a, b) {
    return b - a
};

const multiplication = function (x, y) {
    return x * y
};

const division = function (a, b) {
    return a / b
};

const returnArray = function (arr) {
    return arr
};

const returnFirstIndex = function (arr) {
    return arr[0]
};

const returnSecondIndex = function (arr) {
    return arr[1]
};

const returnArrayLength = function (arr) {
    return arr.length
};

const arraySum = function (numArr) {
   let sum = 0
   for(let i = 0; i < numArr.length; i++){
    sum += numArr[i]
   }
    return sum
};

const arraySubtraction = function (numArr) {
    let total = 0
    for(let i = 0; i <numArr.length; i++){
        total -= numArr[i]
    } return total
};

const multiplicationArray = function (arr) {
    let product = 1
    for(let i = 0; i < arr.length; i++){
        product *= arr[i]
    } return product
};

const divisionArray = function(arr){
    let quotient = 1
    for(let i = 0; i < arr.length; i++){
        quotient /= arr[i]
    }  let result = quotient.toFixed(3)
   return parseFloat(result)
}

const oddArray = function (arr) {
    let oddNumArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            oddNumArr.push(arr[i])
        }
    } return oddNumArr
};

const evenArray = function (arr) {
    let evenNumArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNumArr.push(arr[i])
        }
    } return evenNumArr
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
