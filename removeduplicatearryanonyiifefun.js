let originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

let uniqueArray = (function(arr) {
    let uniqueSet = new Set(arr); // Use a Set to automatically remove duplicates
    return Array.from(uniqueSet); // Convert the Set back to an array
})(originalArray);

console.log(uniqueArray);
