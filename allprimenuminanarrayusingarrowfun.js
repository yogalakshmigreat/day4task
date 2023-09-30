let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];


let isPrime = (num) => {
    if (num <= 1) return false; 
    if (num <= 3) return true; 

    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; // 'num' is prime if not divisible by any smaller numbers
};
// Use the 'filter' method to find prime numbers in the array
let primeNumbers = numbers.filter((num) => isPrime(num));

console.log(primeNumbers);

