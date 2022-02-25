// genrator for player 1
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

var sourcePic1;
if (randomNumber1 == 1) { sourcePic1= "images/dice1.png";
    
} else if (randomNumber1 == 2) { sourcePic1= "images/dice2.png";
    
} else if (randomNumber1 == 3){ sourcePic1= "images/dice3.png";

}  else if (randomNumber1 == 4){sourcePic1= "images/dice4.png";

} else if (randomNumber1 == 5){sourcePic1= "images/dice5.png";

} else if (randomNumber1 == 6){sourcePic1= "images/dice6.png";


}
document.querySelector(".img1").setAttribute("src",sourcePic1);
// genrator for player 2
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var sourcePic2;
if (randomNumber2 == 1) { sourcePic2= "images/dice1.png";
    
} else if (randomNumber2 == 2) { sourcePic2= "images/dice2.png";
    
} else if (randomNumber2 == 3){ sourcePic2= "images/dice3.png";

}  else if (randomNumber2 == 4){sourcePic2= "images/dice4.png";

} else if (randomNumber2 == 5){sourcePic2= "images/dice5.png";

} else if (randomNumber2 == 6){sourcePic2= "images/dice6.png";

}
document.querySelector(".img2").setAttribute("src",sourcePic2);
// change H1 winner player
var textWinner ;
 
if (randomNumber1>randomNumber2) { textWinner = " Player 1 win !";
    
} else if (randomNumber1<randomNumber2) { textWinner = " Player 2 win !";
    
} else { textWinner = "Draw";}
document.querySelector (".container h1").textContent = textWinner;