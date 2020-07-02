const my_collection = [4, 7 , 0, 6]

//Array map method
//array.map (it takes a call back function)
//increment each array element(index)by 2
let new_array = my_collection.map((e, i) => e + 2);
console.log(new_array);

//Function definitionsin Jva Script

//Function Declaration
let array_demo = [];

console.log("original array" , array_demo);

function addTwo(a,b,c) {
   array_demo.push(a);
   array_demo.push(b);
   array_demo.push(c);
   console.log("{New look following push operation" ,array_demo);

let addByTwo = array_demo.map((e, i)=> e+2);
return addByTwo;
}
/*ReferenceError thrown
console.log("Trial logging function scope binding outside the function", addBy Two);
*/

console.log(addTwo(4 ,9,7));
//function expresion
array_demo = [];

const ongezaMbili =function(a, b, c){
    array_demo.push(a);
   array_demo.push(b);
   array_demo.push(c);
   console.log("{New look following push operation" ,array_demo);

let addByTwo = array_demo.map((e, i)=> e+2);
return addByTwo;
}

console.log(ongezaMbili);

//Arrow function
//let array_demo = [];

const zaidiYaMbili = (a,b,c) => {
   array_demo.push(a,b,c);
   console.log('New look array following push operations', array_demo);

   let addByTwo =array_demo.map((e,i) => e+2);
   return addTwo;
};

console.log(zaidiYaMbili(3,8,1));