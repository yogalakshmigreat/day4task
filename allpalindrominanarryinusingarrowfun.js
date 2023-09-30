let strings = ["racecar", "hello", "level", "world", "deified"];


let isPalindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};

// Use the 'filter' method to find palindromes in the array
let palindromes = strings.filter((str) => isPalindrome(str));

console.log(palindromes);
