import { useContext } from "react";
import CalculatorButton, { CalculatorButtonProps } from "./CalculatorButton";
import { CalculatorContext } from "@/context/CalculatorContext";
import { calculate } from "@/utils/calculate";
import { buttonDisablingRules } from "./buttonDisablingRules";
import "../calculator.css";

function Keyboard() {
  const calculatorContext = useContext(CalculatorContext);
  if (!calculatorContext) throw new Error("calculator Context is unavailable");

  const { setDisplayValue, displayValue } = calculatorContext;

  const lastEnteredDigit = displayValue[displayValue.length - 1];

  const getIsButtonDisabled = (value: string): boolean => {
    const rules = buttonDisablingRules[value];
    if (!rules || !rules.disabledAfter.includes(lastEnteredDigit)) {
      return false;
    }
    return true;
  };

  const buttons: CalculatorButtonProps[] = [
    { value: "(" },
    { value: ")" },
    {
      value: "DEL",
      onClick: () => {
        setDisplayValue((currentDisplayValue) => currentDisplayValue.substring(0, currentDisplayValue.length - 1));
      },
    },
    {
      value: "CLR",
      onClick: () => {
        setDisplayValue("");
      },
    },
    { value: "9" },
    { value: "8" },
    { value: "7" },
    { value: "÷" },
    { value: "6" },
    { value: "5" },
    { value: "4" },
    { value: "×" },
    { value: "3" },
    { value: "2" },
    { value: "1" },
    { value: "-" },
    { value: "0" },
    { value: "." },
    {
      value: "=",
      onClick: () => {
        setDisplayValue((equation) => {
          const value = calculate(equation);
          return value;
        });
      },
    },
    { value: "+" },
  ].map((buttonData): CalculatorButtonProps => ({ ...buttonData, disabled: getIsButtonDisabled(buttonData.value) }));

  return (
    <div className="calculatorKeyboard">
      {buttons.map((button) => (
        <CalculatorButton value={button.value} onClick={button.onClick} key={button.value} disabled={button.disabled} />
      ))}
    </div>
  );
}

export default Keyboard;
