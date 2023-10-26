var randonNumber1=Math.floor(Math.random()*6)+1
var diceimage="dice"+randonNumber1+".png"
var img1=document.querySelectorAll("img")[0].setAttribute("src",diceimage)


var randonNumber2=Math.floor(Math.random()*6)+1
var diceimage2="dice"+randonNumber2+".png"
var img2=document.querySelectorAll("img")[1].setAttribute("src",diceimage2)

if (randonNumber1>randonNumber2){
document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}

else if (randonNumber1<randonNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩 ";
    }
else{
    document.querySelector("h1").innerHTML="Tie";
}
