let displayValue = "0";
let pendingValue = "";
let operator = null;

function addToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }

  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  pendingValue = "";
  operator = null;

  updateDisplay();
}

function deleteDisplay() {
  let x = document.getElementById("displayText").value;
  document.getElementById("displayText").value = x.substring(0, x.length - 1);
}

function setOperator(op) {
  if (pendingValue !== "0") {
    calculate();
  }
  operator = op;
  pendingValue = displayValue;
  displayValue = "0";
}

function calculate() {
  if (operator && pendingValue !== "") {
    switch (operator) {
      case "+":
        displayValue = parseFloat(pendingValue) + parseFloat(displayValue);
        break;
      case "-":
        displayValue = parseFloat(pendingValue) - parseFloat(displayValue);
        break;
      case "*":
        displayValue = parseFloat(pendingValue) * parseFloat(displayValue);
        break;
      case "/":
        displayValue = parseFloat(pendingValue) / parseFloat(displayValue);
        break;
      case "=":
        updateDisplay();
        break;
      case "mod":
        displayValue = parseFloat(pendingValue) % parseFloat(displayValue);
        break;
      case "xⁿ":
        displayValue = parseFloat(pendingValue) ** parseFloat(displayValue);
        break;
      case "ⁿ√a":
        displayValue = parseFloat(pendingValue) ** parseFloat()
    }
    operator = null;
    pendingValue = "";
    updateDisplay();
  }
}

function newFunction(x) {
  if (displayValue !== "0") {
    switch (x) {
      case "√":
        operator = x;
        displayValue = Math.sqrt(parseFloat(displayValue));
        break;
      case "x²":
        operator = x;
        displayValue = parseFloat(displayValue ** 2);
        break;
      case "%":
        operator = x;
        displayValue = parseFloat(displayValue / 100);
        break;
      case "π":
        const PhiBtn = getElementById("PhiBtn");
        if (displayValue === "0") {
          PhiBtn.addEventListener("click", function () {
            displayValue = parsefloat(Math.PI);
          });
        } else {
          displayValue = parseFloat(Math.PI / displayValue);
        }
    }
  }

  operator = null;
  updateDisplay();
}

function factorial() {
  let result = 1;
  const number = parseFloat(displayValue);
  if (number === 0) {
    displayValue = 1;
  } else {
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    displayValue = result;
  }

  updateDisplay();
}

function updateDisplay() {
  document.getElementById("displayText").value = displayValue;
}
