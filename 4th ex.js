//---Directions
//write a function that returns the number of vowels
//used in a string. Vowels are the characters 'i', 'o', and 'u'.
//----Examples
// vowels('Hi There)

function vowels(str){
    var matches = str.match(/[aeiou]/gi)
    return  matches ? matches.length : 0;
}

console.log(vowels("design"));
