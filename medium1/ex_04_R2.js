/*
Input: string representing an operation
Output: unimportant

Rules:
  -All operations are integer operations
  -Assume argument is valid (no need to validate)
  -Multiple programs and functions may be passed in through the string
  -Within function:
    -Initialize stack to [] and register to 0
    
Algorithm:
  -Split input string into array
  -Iterate over array
    -Identify program
    -Run program
*/

function minilang(program) {
  const MINILANG_COMMANDS = {
                           PUSH: () => stack.push(register),
                           ADD: () => {
                                        register += stack.pop();
                                    },
                           SUB: () => {
                                        register -= stack.pop();
                                    },
                           MULT: () => {
                                        register *= stack.pop();
                                    },
                           DIV: () => {
                                        register = Math.floor(register / stack.pop());
                                    },
                           MOD: () => {
                                        register = Math.floor(register % stack.pop());
                                    },
                           POP: () => {
                                        register = stack.pop();
                                    },
                           PRINT: () => console.log(register)
                          };

  let stack = [];
  let register = 0;
  
  program.split(' ').forEach(element => {
    if (!isNaN(Number(element))) {
      register = Number(element);
    } else {
      MINILANG_COMMANDS[element]();
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

//minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
