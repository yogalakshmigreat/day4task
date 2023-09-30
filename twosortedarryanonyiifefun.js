let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function(arr1, arr2) {
    let merged = [...arr1, ...arr2].sort((a, b) => a - b);
    let middle = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
        // If the merged array has an even length, take the average of the middle two elements
        return (merged[middle - 1] + merged[middle]) / 2;
    } else {
        // If the merged array has an odd length, return the middle element
        return merged[middle];
    }
})(arr1, arr2);

console.log(median);
