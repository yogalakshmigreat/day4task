let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let calculateSum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const sum = calculateSum(numbers);
console.log(sum);
