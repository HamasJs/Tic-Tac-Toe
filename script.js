"use strict";

const container = document.querySelector(".container");
const ct_grid = document.querySelector(".ct-grid");
const grid = document.querySelector(".grid");
const choice = document.getElementById("mark");
const player1 = document.querySelector(".player1");
const player2 = document.getElementById("player2");
const winner1 = document.querySelector(".winner");
const winning_text = document.querySelector(".winning-text");
const resetBtn = document.getElementById("reset");

var Player1 = "X";
var Player2 = "O";
let marker = ["X", "O"]; // The X and O
let places = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]; //The Array containing places
let play = true; //The boolean which decides the Player
let storage = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let won = false;

//Event Listeners
choice.addEventListener("change", function () {
  Player1 = this.value;
  choice.remove();

  let div = document.createElement("div");
  div.className = "choice";
  div.textContent = Player1;
  div.style.backgroundColor = "white";
  player1.appendChild(div);

  choosePlayer();
});

resetBtn.addEventListener("click", function () {
  winner1.classList.toggle("hidden");
  location.reload();
});



//Function to make the grid
const GameBoard = function () {
  for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.className = "div";
    div.id = `div${i}`;
    grid.appendChild(div);
  }
};

const GamePlay = function () {
  for (let i = 0; i < 9; i++) {
    let div = document.getElementById(`div${i}`);
    div.addEventListener("click", function () {
      if (play) {
        if (places[i] !== "occupied") {
          div.textContent = Player1;
          play = false;
          places[i] = "occupied";
          storage[i] = Player1;
          winner();
        }
      } else {
        if (places[i] !== "occupied") {
          div.textContent = Player2;
          play = true;
          places[i] = "occupied";
          storage[i] = Player2;
          winner();
        }
      }
    });
  }
};

const winner = function () {
  let div = storage.filter(element=>element == " ");
  if (
    (storage[0] == Player1 && storage[1] == Player1 && storage[2] == Player1) ||
    (storage[3] == Player1 && storage[4] == Player1 && storage[5] == Player1) ||
    (storage[6] == Player1 && storage[7] == Player1 && storage[8] == Player1) ||
    (storage[0] == Player1 && storage[3] == Player1 && storage[6] == Player1) ||
    (storage[1] == Player1 && storage[4] == Player1 && storage[7] == Player1) ||
    (storage[2] == Player1 && storage[5] == Player1 && storage[8] == Player1) ||
    (storage[0] == Player1 && storage[4] == Player1 && storage[8] == Player1)
    ) {
      winner1.classList.toggle("hidden");
      winning_text.textContent = "Player 1 Won! 🥳";
      won = true;
    }
    
    else if (
      (storage[0] == Player2 && storage[1] == Player2 && storage[2] == Player2) ||
      (storage[3] == Player2 && storage[4] == Player2 && storage[5] == Player2) ||
      (storage[6] == Player2 && storage[7] == Player2 && storage[8] == Player2) ||
      (storage[0] == Player2 && storage[3] == Player2 && storage[6] == Player2) ||
      (storage[1] == Player2 && storage[4] == Player2 && storage[7] == Player2) ||
      (storage[2] == Player2 && storage[5] == Player2 && storage[8] == Player2) ||
      (storage[0] == Player2 && storage[4] == Player2 && storage[8] == Player2)
      ) {
        winner1.classList.toggle("hidden");
        winning_text.textContent = "Player 2 Won! 🥳";
        won = true;
      }
      
      else if(div==0)
      {
        
        winner1.classList.toggle("hidden");
        winning_text.textContent = "It's a Draw! 😁";
      }

    };
    
    const choosePlayer = function () {
      if (Player1 != "X") {
        Player2 = "X";
        player2.textContent = "X";
      } else {
        Player2 = "O";
        player2.textContent = "O";
      }
    };

    const startGame = function() {
      choosePlayer();
      GameBoard();
      GamePlay();
    }
    

    startGame();