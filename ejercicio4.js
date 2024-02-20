let numbers = [2, 4, 6, 8, 1, 3, 5]
console.log(numbers)
numbers.sort((a, b) => {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
});
console.log(numbers)

numbers.sort((a, b) => {
    if (a == b) {
        return 0;
    }
    if (a > b) {
        return -1;
    }
    return 1;
});
console.log(numbers)