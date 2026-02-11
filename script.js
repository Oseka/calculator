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



