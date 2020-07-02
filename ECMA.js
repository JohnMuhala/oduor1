/*  ECMA6 defines each object category
using js patterns we can eliminate duplication that exist around property names and local variables
*/
function createPerson(name, age) {
    return {
    name: name,
    age: age
    };
    }
    //The above code is the duplication
    //The below code shows results that occured after elimination was taken out

function createPerson(name, age) {
    return {
    name,
    age
    };
    }
 
/*Using the concise method  eliminates the colon and the function keyword*/
var person = {
    name: "Gabriel",
    sayName: function() { //the colon and the function keyword are both eliminated
    console.log(this.name);
    }
    };console.log(this.name)

    // So this should be the outcome
    var person = {
        name: "Gabriel",
        sayName  (){console.log('Gabriel');  }  // both the colon and the function keyword are both eliminated
        
        };console.log('Gabriel')

        //introduction of new method which are designed to make certain tasks easier
        console.log(100 ===-100) //this should be true because the values are the same and they have they are of the same type

//




//Expanded object functionality in e6

const : 'green',