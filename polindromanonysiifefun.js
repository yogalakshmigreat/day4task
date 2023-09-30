let inputArray = ["racecar", "hello", "level", "world", "deified"];

// Using an anonymous function and IIFE to find palindromes
let palindromes = (function(arr) {
    function isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }

    let palindromes = [];
    for (const word of arr) {
        if (isPalindrome(word)) {
            palindromes.push(word);
        }
    }
    
    return palindromes;
})(inputArray);

console.log(palindromes);
