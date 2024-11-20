const display= document.querySelector(".display");

function appendToDisplay(input){
    display.value += input;
}

function appendToClear(input){
    display.value = "";
}

function deleteNumber(input){
    display.value= display.value.slice(0,-1);
    
}

// working with the equal to sign

function evaluateExpression() {
    const expression = display.value;
  
    // Split the expression into tokens (numbers and operators)
    const tokens = expression.split(/(\+|\-|\*|\/)/);
  
    // Initialize the result with the first number
    let result = parseFloat(tokens[0]);
  
    // Iterate over the tokens and perform the operations
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);
  
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          result /= operand;
          break;
      }
    }
  
    // Update the display with the result
    display.value = result;
  }