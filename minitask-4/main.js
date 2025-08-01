 // Functions
    function add(a, b) { return a + b; }
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => b !== 0 ? a / b : "Error: Divide by 0";

    // Main calculator logic
    function performCalculation() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operator = document.getElementById("operator").value;
      const resultDiv = document.getElementById("result");

      let result;

      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
      } else {
        switch (operator) {
          case '+': result = add(num1, num2); break;
          case '-': result = subtract(num1, num2); break;
          case '*': result = multiply(num1, num2); break;
          case '/': result = divide(num1, num2); break;
          default: result = "Invalid operator";
        }
      }

      resultDiv.textContent = "Result: " + result;}