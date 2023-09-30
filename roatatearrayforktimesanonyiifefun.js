let originalArray = [1, 2, 3, 4, 5];
let k = 2; // Number of times to rotate

let rotatedArray = (function(arr, k) {
    let n = arr.length;
    let rotated = [...arr]; // Create a copy of the original array

    for (let i = 0; i < n; i++) {
        let newPosition = (i + k) % n; // Calculate the new position after rotating
        rotated[newPosition] = arr[i]; // Update the rotated array
    }

    return rotated;
})(originalArray, k);

console.log(rotatedArray);
