function lessThanOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or equal to 12";
    }

    if (val <= 24) {
        return "Smaller than or equal to 24";
    }

    return "More than 24";
}

console.log(lessThanOrEqual(16))