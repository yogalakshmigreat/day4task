let stringArray = ["hello world", "this is a test", "javascript is fun"];

(function(arr) {
    let titleCaseArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        let words = arr[i].split(" ");
        let titleCaseWords = [];
        
        for (let word of words) {
            titleCaseWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
        
        titleCaseArray.push(titleCaseWords.join(" "));
    }
    
    console.log(titleCaseArray);
})(stringArray);
