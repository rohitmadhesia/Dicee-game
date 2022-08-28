var randomNumber1 = Math.floor(Math.random()*7);
var randomimage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

var randomnumber2 = Math.floor(Math.random()*7);
var randomimage2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randomNumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "player 1 won";
}
else if (randomnumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "palyer 2 won";
}
else{
  document.querySelector("h1").innerHTML = "draw";
}
