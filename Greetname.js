/*Write a method that takes one argument as name and then greets that name, capitalized 
and ends with an exclamation point*/


var greet = {
    name: function (str){
        return ('Hello ' + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + '!');
    },
    lastName: function(str){
        return str.toUpperCase();
    }
};

console.log(greet.name('jOhN')); 
console.log(greet.lastName('mike'))