//Random number generator
var num=Math.random();// it will generate btwn 0 and upto 16 decimal places but never hits 0 and 1;
num=num*6
num=Math.floor(num)+1;
console.log(num+1);

//live score

score=Math.random()*100;
score=Math.floor(score)+1;
console.log(score);


5 =='5' // true: ignores type
5 === '5' // false: includes type

// ===	means equal value and equal type
var x = 5

// true
x === 5

// false
x === "5"

//eg:

var a=10;
var b="10";
if(a==b)
console.log("Equal");
else
console.log("Not equal");

//output:equal

var a=10;
var b="10";
if(a===b)
console.log("Equal");
else
console.log("Not equal");

//output: false

//similarly we have !== which checks type


//logical operators

var a=12;
var b=10
if(a%2===0&&b%2===0){
    console.log("both even");
}
else
console.log("both not even");

//array


var arr=["yogendra","ankit","rohit","manish"];
var user=prompt("enter your name");
if(arr.includes(user)){
    alert("welcome");
}
else
alert("Sorry you are not in the list");


//push and pop in arrays
//push-to add in array at end
//pop-to retrive from array at end

var arr=[];
arr.push(12);
arr.push(13);
arr.push(34);
arr.push(35);
arr.pop();//they will pop the last item out
arr.pop();
console.log(arr);

//outpout: 12,13

fizzbuzz(1);
arr=[];
function fizzbuzz(x){

    if(x%3===0||x%5===0)
     arr.push("fizz");
    else
    arr.push(x);
    console.log(arr);
}


//whos going to pay the bill

var arr=["yogendra","ankit","rohit","manish"];

var who=bill(arr);
console.log(who+" will pay the bill");

function bill(arr){
    var len=arr.length;

    var ran=Math.floor(Math.random()*len);
    return arr[ran];
}


//loops in JS

var i=100;

while(i>0){

    console.log(i);
    i--;

}



//for loop

for(var i=0;i<=100;i++){
    console.log(i);
}

//fibonacci

console.log(0);
console.log(1);
var a=0;
var b=1;
for(var i=0;i<20;i++){

    c=a+b;
    console.log(c);
    a=b;
    b=c;
}