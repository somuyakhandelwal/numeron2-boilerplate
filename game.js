var num1 = Math.round(Math.random() * 100);
const num1Element = document.getElementById("number1");

var num2 = Math.round(Math.random() * 100);
const num2Element = document.getElementById("number2");

var operation;
var userScore = 0;
const addBtn = document.getElementById("plus");
const subtractBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("mul");
const divideBtn = document.getElementById("divide");
const modulusBtn = document.getElementById("modulus");

var num3Element = document.getElementById("number3");
var num3;

function randomize() {
    num1 = Math.round(Math.random() * 100);
    num2 = Math.round(Math.random() * 100);
    if (num1 < num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
      }
    
      operation = Math.round(Math.random() * 5);
      switch (operation) {
        case 1:
          num3 = num1 + num2;
          break;
    
        case 2:
          num3 = num1 - num2;
          break;
    
        case 3:
          num3 = num1 * num2;
          break;
    
        case 4:
          num3 = Math.floor(num1 / num2);
          break;
    
        case 5:
          num3 = num1 % num2;
          break;
    
        case 0:
          randomize();
      }
    
      num1Element.innerHTML = num1;
      num2Element.innerHTML = num2;
      num3Element.innerHTML = num3;
    
      console.log(num1 + " " + num2 + " " + num3 + " " + operation);
    }
    
    randomize();

addBtn.onclick = () => {
    if (num1 + num2 === num3) {
      userScore++;
      randomize();
      resetTimer(timerId);
    } else {
      location.href = "gameover.html?score=" + userScore;
    }
  };

subtractBtn.onclick = () => {
    if (num1 - num2 === num3) {
      userScore++;
      randomize();
      resetTimer(timerId);
    } else {
      location.href = "gameover.html?score=" + userScore;
    }
};

multiplyBtn.onclick = () => {
        if (num1 * num2 === num3) {
          userScore++;
          randomize();
          resetTimer(timerId);
        } else {
          location.href = "gameover.html?score=" + userScore;
        }
      };
divideBtn.onclick = () => {
        if (Math.floor(num1 / num2) === num3) {
          userScore++;
          randomize();
          resetTimer(timerId);
        } else {
          location.href = "gameover.html?score=" + userScore;
        }
      };
modulusBtn.onclick = () => {
        if (num1 % num2 === num3) {
          userScore++;
          randomize();
          resetTimer(timerId);
        } else {
          location.href = "gameover.html?score=" + userScore;
        }
      };

var seconds = 20;
var timerId;

function startTimer() {
  seconds = 20;
  timer.innerHTML = seconds;
  timerId = setInterval(() => {
    seconds--;
    if (seconds == 0) location.href = "./gameover.html?score=" + userScore;
    timer.innerHTML = seconds;
  }, 1000);
}

function resetTimer(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
