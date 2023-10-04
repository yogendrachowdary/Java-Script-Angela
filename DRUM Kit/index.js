// document.querySelector("button").addEventListener("click",myListenrFunc);


// function myListenrFunc(){
//     alert("I am Clicked!")
// }

// another way which most people follow


for( var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    this.style.color="white";


});

}

// var audio =new Audio("./sounds/crash.mp3");
// audio.play();
