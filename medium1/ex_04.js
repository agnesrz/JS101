// My Solution
/*
function minilang(command) {
  let commands = command.split(' ');
  let stack = []; // -3
  let register = 0; // 5
  
  for (let idx = 0; idx < commands.length; idx += 1) {
    let currentCommand = convertMinilangCommand(commands[idx]);

    switch (currentCommand) {
      case 'NUM':
        register = Number(commands[idx]);
        break;
      case 'PUSH': stack.push(Number(register));
        break;
      case 'PRINT': console.log(register);
        break;
      case 'OPER':
        register = performOper(stack.pop(), register, commands[idx]);
    }
  }
}

function convertMinilangCommand(command) {
  let operations = ['POP', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD'];
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];

  if (digits.includes(command[0])) {
    return 'NUM';
  } else if (operations.includes(command)) {
    return 'OPER';
  } else {
    return command;
  }
}

function performOper(stackValue, register, oper) {
  switch (oper) {
    case 'POP': return stackValue;
    case 'ADD': return register + stackValue;
    case 'SUB': return register - stackValue; // 5 - -3
    case 'MULT': return register * stackValue;
    case 'DIV': return Number.parseInt(register / stackValue, 10);
    case 'MOD': return Number.parseInt(register % stackValue, 10);
  }
}

minilang('-3 PUSH 5 SUB PRINT');
// 8
*/

//Further Exploration
function minilang(program) {
  let stack = [];
  let register = 0;
  let commands = ['POP', 'ADD', 'DIV', 'SUB', 'MULT', 'DIV', 'MOD', 'PUSH', 'PRINT'];
  
  program.split(" ").forEach(token => {
    if (!commands.includes(token) && isNaN(token)) {
      throw new TypeError("invalid command");
    }
    
    switch (token) {
      case "ADD":
        register += stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "MOD":
        register = Math.floor(register % stack.pop());
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "PUSH":
        stack.push(register);
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(token);
      }
  });
  
  if (isNaN(register)) {
    return undefined;
  }
  
  return register;
}

console.log(minilang('7 PUSH 3 ADD PRINT HELLO ADD 4 PRINT'));
// 10
// TypeError
// 11