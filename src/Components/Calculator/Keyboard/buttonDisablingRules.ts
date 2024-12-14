type ButtonDisablingRules = { [key: string]: { disabledAfter: string[] } };

export const buttonDisablingRules: ButtonDisablingRules = {
  "0": { disabledAfter: [")"] },
  "1": { disabledAfter: [")"] },
  "2": { disabledAfter: [")"] },
  "3": { disabledAfter: [")"] },
  "4": { disabledAfter: [")"] },
  "5": { disabledAfter: [")"] },
  "6": { disabledAfter: [")"] },
  "7": { disabledAfter: [")"] },
  "8": { disabledAfter: [")"] },
  "9": { disabledAfter: [")"] },
  "-": { disabledAfter: ["(", "+", "×", "÷", "."] },
  "+": { disabledAfter: ["(", "+", "×", "÷", "-", "."] },
  "×": { disabledAfter: ["(", "+", "×", "÷", "-", "."] },
  "÷": { disabledAfter: ["(", "+", "×", "÷", "-", "."] },
  ".": { disabledAfter: ["(", "+", "×", "÷", "-", ")", "."] },
  "(": { disabledAfter: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ")"] },
  ")": { disabledAfter: ["+", "×", "÷", "-", "(", "."] },
};
