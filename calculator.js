const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".calc-button");

let currentInput = "";
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      screen.textContent = "0";
      return;
    }

    if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      screen.textContent = currentInput || "0";
      return;
    }
   
    if (value === "=") {
      try {
       
        const expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(expression); 
        screen.textContent = result;
        currentInput = result.toString();
      } catch (e) {
        screen.textContent = "Error";
        currentInput = "";
      }
      return;
    }

   
    currentInput += value;
    screen.textContent = currentInput;
  });
});









/*let runTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');
function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }           
    screen.innerText = buffer;
}
function init () {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    });







function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}   
function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':   
            buffer = "0";
            runTotal = 0;
            break;  
        case '=':
            if (previousOperator === null) {
                return;
            }*/