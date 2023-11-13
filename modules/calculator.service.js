// 8 9 + 1 7 - *

/*
  input - normalized string with numbers and operators
* */
function parser(input) {
  return input.split(' ').map(value => {
    // validate
    // it can be number or operator
    if (isOperator(value)) {
      return value;
    }
    return Number(value);
  });
}

function isOperator(value) {
  return ['+', '-', '/', '*'].includes(value);
}

function calculation(expression) {
  const stack = [];

  let normalizedInput = expression.trim().replace(/\s+/g, ' ');

  const lexemes = parser(normalizedInput);

  if (lexemes.length < 3) {
    throw new Error('Invalid input format: there are not enough lexemes');
  }

  for (const lexeme of lexemes) {
    if (isOperator(lexeme)) {
      if (stack.length < 2) {
        throw new Error('Invalid input format: there are not enough operands');
      }

      const operand2 = stack.pop();
      const operand1 = stack.pop();

      console.log({ operand1, lexeme, operand2 });

      let result;
      switch (lexeme) {
        case '+': {
          result = operand1 + operand2;
          break;
        }
        case '-': {
          result = operand1 - operand2;
          break;
        }
        case '*': {
          result = operand1 * operand2;
          break;
        }
        case '/': {
          result = operand1 / operand2;
          break;
        }
        default:
          throw new Error('Unknown operator');
      }
      console.log({ result });
      stack.push(result);
    } else {
      // it is just a number
      stack.push(lexeme);
    }
  }

  if (stack.length !== 1) {
    console.log({ stack });
    throw new Error('Invalid input format: there are not enough operators');
  }

  return stack.pop();
}

module.exports = { calculation };
