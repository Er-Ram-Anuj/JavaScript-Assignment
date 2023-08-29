// 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.
let numberIs=17;
if((numberIs%3)==0){
console.log("Fizz");
}
else if((numberIs%5)==0){
    console.log("Buzz");
}
else if(((numberIs%5)==0)==((numberIs%3)==0)){
    console.log("FizzBuzz");
}
else{
    console.log("Operation end");
}