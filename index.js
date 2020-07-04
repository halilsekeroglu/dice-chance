//*******/ Variables /********//
var secondPlayerName;
var started = false;


if (!started) {
  document.addEventListener("keydown", function (event) {

    if (event.which === 13) {
      secondPlayerName = prompt('Enter name for player2');
      document.querySelector('.secondPlayer').innerHTML = secondPlayerName
      document.querySelector('h1').innerHTML = "Press button to play";
      started = true;

    }
    rollDice();
  });
}

function rollDice() {

  document.querySelector('button').addEventListener("click", function () {

    makeSound();
    setTimeout(function () {
      // *****To create 2 different random number***** //
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      console.log(randomNumber1);

      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      console.log(randomNumber2);

      //*****Set Attributes to process on image***** /

      document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

      document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

      // To change h1 according to large random number**//

      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Halil Win !"
        document.querySelector("h1").style.fontSize = "5rem";
        document.querySelector("h1").style.color = "#12cad6";
        document.querySelector("h1").style.textShadow = '3px 0 0 '
      } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = " Draw !"
        document.querySelector('h1').style.fontSize = "5rem"
        document.querySelector("h1").style.color = "#12cad6";
        document.querySelector("h1").style.textShadow = '3px 0 0 '
      } else {
        document.querySelector("h1").innerHTML = secondPlayerName + " Win !";
        document.querySelector("h1").style.fontSize = "5rem";
        document.querySelector("h1").style.color = "#12cad6";
        document.querySelector("h1").style.textShadow = '3px 0 0 '


      }

    }, 1600);


  })

  function makeSound() {
    var audio = new Audio('sounds/rolldicee.wav');
    audio.play();
  }
}