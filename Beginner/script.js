//for alert use alert or alert.window

alert("Hello world");

//to print something on the console

console.log("Hello world");


//prompt i used to take a input from the user

var nickname=prompt("Enter you name");
alert("you name is "+nickname);

//alert and prompt using a varible

var msg="Hii good morning!!";
alert(msg);

var input=prompt("Enter your name :");

console.log("Nice to meet you "+input);




//some basic data types

var num=123;

typeof(num); //here num is of type number
typeof(nickname);
typeof(true);


//swap two numbers using js

var a=12
var b=10

var c;
c=a;
a=b;
b=c;

console.log("a is: "+a+" and b is :"+b);


//String length

var msg=prompt("This is the tweet body");
var len=msg.length;

alert("Heyyy, you have entered"+len+" characters and left with only "+(100-len)+" characters");




//slice in Strings


var msg=prompt("This is the tweet body");
var len=msg.length;

alert("Heyyy, you have entered"+len+" characters and the new sliced msg is "+msg.slice(0,10));


//combined


alert(prompt("Enter your msg").slice(0,140));

//to lower and upper case


var msg="enter your name";

var low=prompt(msg).toLowerCase();
alert(low);


//making first letter capital


var uname=prompt("Enter your name");

alert("your name is "+uname.slice(0,1).toUpperCase()+uname.slice(1,uname.length));


//dog age to human age

var age=prompt("enter dog age");

alert("Human age is: "+((age-2)*4+21));


//increment decrement

x=1;

console.log(x++);
x--;

x+=2;
x-=2;
x/=1;
x*=10;


//functions

printSomething();
function printSomething(){
    console.log("I am in function1");
      function2();

}

function function2(){
    console.log("I am in function 2");
}


//functions part 2

function add(a,b){//here we dont use data types in parameters
    console.log(a+b);
}
add(1,2);


//with return function

function mul(a,b){
    return a*b;
}

ans=mul(2,3);
console.log(ans);

