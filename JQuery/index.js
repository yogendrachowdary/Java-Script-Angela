




$("a").attr("href","https://www.youtube.com/");

//JQuery Event Listener


$("h1").click(function(){

    $("h1").addClass("magic");
});

$("button").on("click",function(){
    $("h2").slideUp();
});


$("h2").css("font-size","15rem");

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").innerHTML = "<marquee>Yogendra</marquee>";
//     });
// }

// shorter version of above
$("button").click(function(){

    $("h1").html("<marquee>Yogendra</marquee>");

});


$s("a").click(function(){
    $("a").css("color","red");
});





$("h2").before("<button>hello</button>");    //this will add a button before your tag
$("h2").after("<button>hello</button>");      //this will add a button after your tag

$("h2").prepend("<button>hello</button>"); //this will add a button just before the content of your tag
$("h2").append("<button>hello</button>"); //this will add a button just after the content of your tag

// $("input").keypress(function(event){          this is to select the input tag
//     console.log(event.key);
// });


//to select entire document we use this


$(document).keypress(function(event){
     $("h2").text(event.key);
});


// $("h2").on("mouseover",function(){
//     $("h2").css("color","yellow");
// });




