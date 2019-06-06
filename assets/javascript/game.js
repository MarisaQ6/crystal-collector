// game.js

$(document).ready(function() {

// set up math

    var random = Math.floor(Math.random()*102+19);
    $("#numberMatch").text(Random);

// var arrays for crystals  

    var blue= Math.floor(Math.random()*12+1);
    var green= Math.floor(Math.random()*12+1);
    var pink= Math.floor(Math.random()*12+1);
    var purple= Math.floor(Math.random()*12+1);

// set up parameters

var wins= 0;
var losses= 0;
var userTotal=0;
$("#wins").text(wins);
$("#losses").text(losses);

function reset(){
    Random=Math.floor(Math.random()*102+19);
    $("#numberMatch").text(Random);

    blue= Math.floor(Math.random()*12+1);
    green= Math.floor(Math.random()*12+1);
    pink= Math.floor(Math.random()*12+1);
    purple= Math.floor(Math.random()*12+1);
  
userTotal= 0;
$("#totalScore").text(userTotal)

}

// create functions for user response

function winning(){
wins++;
$("#wins").text(wins);
reset();
}

function losing(){
    losses++;
    $("#losses").text(losses);
    reset();
}

// Crystal functions vs user

$("#blueCrystal").on ("click",function(){
    userTotal + userTotal + blue;
    console.log("blue" +userTotal);
    $("#userScore").text(userTotal);

    if(userTotal== Random){
        winning();
    }

    else if (userTotal > Random){
        losing();
    }
})

$("#greenCrystal").on ("click",function(){
    userTotal + userTotal + green;
    console.log("green" +userTotal);
    $("#userScore").text(userTotal);

    if(userTotal== Random){
        winning();
    }

    else if (userTotal > Random){
        losing();
    }
})

$("#pinkCrystal").on ("click",function(){
    userTotal + userTotal + pink;
    console.log("pink" +userTotal);
    $("#userScore").text(userTotal);

    if(userTotal== Random){
        winning();
    }

    else if (userTotal > Random){
        losing();
    }
})

$("#purpleCrystal").on ("click",function(){
    userTotal + userTotal + purple;
    console.log("purple" +userTotal);
    $("#userScore").text(userTotal);

    if(userTotal== Random){
        winning();
    }

    else if (userTotal > Random){
        losing();
    }
});

});
