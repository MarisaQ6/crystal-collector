// game.js

$(document).ready(function() {

// set up math

    var random = Math.floor(Math.random()*102+19);
    $("#numberMatch").text(random);
    console.log ("randomNum",random)
// var arrays for crystals  

    var blue= Math.floor(Math.random()*12+1);
    console.log ("blue", blue);
    var green= Math.floor(Math.random()*12+1);
    console.log ("green", green);
    var pink= Math.floor(Math.random()*12+1);
    console.log("pink", pink);
    var purple= Math.floor(Math.random()*12+1);
    console.log ("purple", purple);

// set up parameters

var wins= 0;
console.log ("wins", wins);
var losses= 0;
console.log ("losses", losses);
var userTotal=0;
console.log("userTotal", userTotal);
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
}

function losing(){
    losses++;
    $("#losses").text(losses);
    }

// Crystal functions vs user

$("#blueCrystal").on ("click",function(){
    console.log("I am the blue crystal");
    userTotal += blue;
    console.log("userTotal");
    $("#userScore").text(userTotal);

    if(userTotal=== random){
        winning();
        reset();
    }

    else if(userTotal > random){
        losing();
    }
})

$("#greenCrystal").on ("click",function(){
    userTotal += green;
    console.log("green" +userTotal);
    $("#userScore").text(userTotal);

    if(userTotal== random){
        winning();
        reset();
    }

    else if(userTotal > random){
        losing();
    }
})

$("#pinkCrystal").on ("click",function(){
    userTotal +=pink;
    console.log("pink" +userTotal);
    $("#userScore").text(userTotal);

    if(userTotal== random){
        winning();
        reset();
    }

    else if(userTotal > random){
        losing();
    }
})

$("#purpleCrystal").on ("click",function(){
    userTotal += purple;
    console.log("purple" +userTotal);
    $("#userScore").text(userTotal);

    if(userTotal== random){
        winning();
        reset();
    }

    else if(userTotal > random){
        losing();
    }
});

});
