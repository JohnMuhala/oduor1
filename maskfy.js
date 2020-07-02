//Usually when you buy something, 
//you're asked whether your credit card number, 
//phone number or answer to your most secret question is still correct.
 //However, since someone could look over your shoulder, you don't want that shown on your screen.
  //Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.//
​
// return masked string


function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('567890')); //##7890
console.log(maskify('88')); // 88
console.log(maskify('1erttyu1')); // ####tyui