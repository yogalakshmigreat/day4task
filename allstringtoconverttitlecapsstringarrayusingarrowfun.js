let stringArray = ["hello world", "javascript is fun", "title case example"];

let titleCapsArray = stringArray.map((str) => {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

console.log(titleCapsArray);
