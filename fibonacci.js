/*Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering
of numbers where eash number is the sum of the preceeding two.

For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series

Example fib(4)  === 3*/

function fib(num) {
    /*If the Number 'N' is less than 2, I think its easier to just return the 
    number itself (Which is basically 0, 1 & 2). If higher,  think we can 
    take the number itself (N - 1 --> to get the number immediately before it and add it 
    to N - 2 --> to get the preceding next number)*/

//Hence
    if (num < 2){
        console.log(num)}
    else{
        console.log(((num - 1) + (num - 2)))
}
}

console.log(fib(4))