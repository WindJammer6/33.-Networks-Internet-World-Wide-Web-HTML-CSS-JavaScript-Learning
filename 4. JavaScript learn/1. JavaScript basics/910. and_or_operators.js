function testOrOperator(val) {
    if (val < 10 || val > 20) {
        return "Outside 10 to 20 range inclusive";
    }

    return "Inside 10 to 20 range inclusive";
}


function testAndOperator(val) {
    if (val <= 50 && val >= 25) {
        return "Inside 25 to 50 range inclusive";
    }

    return "Outside 25 to 50 range inclusive";
}


console.log(testOrOperator(16))
console.log(testAndOperator(16))