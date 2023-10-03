var num1=Math.floor(Math.random()*6)+1

var num2=Math.floor(Math.random()*6)+1

document.querySelector(".dice .img1").setAttribute("src","./images/dice"+num1+".png");

document.querySelector(".dice .img2").setAttribute("src","./images/dice"+num2+".png");

if(num1>num2){

    document.querySelector("title").textContent="1wins";
    document.querySelector("h1").innerHTML="🚩1wins"

}
else if(num1<num2)
{
    document.querySelector("title").textContent="2wins";
    document.querySelector("h1").innerHTML="🚩2wins"

}
else
{
    document.querySelector("title").textContent="Tie";
    document.querySelector("h1").innerHTML="DRAW"


}