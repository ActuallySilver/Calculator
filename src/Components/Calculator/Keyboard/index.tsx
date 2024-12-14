import { useContext } from "react";
import CalculatorButton, { CalculatorButtonProps } from "./CalculatorButton";
import { CalculatorContext } from "@/context/CalculatorContext";
import { calculate } from "@/utils/calculate";
import { buttonDisablingRules } from "./buttonDisablingRules";

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
    { value: "0" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    {
      value: "CLR",
      onClick: () => {
        setDisplayValue("");
      },
    },
    {
      value: "DEL",
      onClick: () => {
        setDisplayValue((currentDisplayValue) => currentDisplayValue.substring(0, currentDisplayValue.length - 1));
      },
    },
    { value: "-" },
    { value: "+" },
    { value: "×" },
    { value: "÷" },
    { value: "." },
    { value: "(" },
    { value: ")" },
    {
      value: "=",
      onClick: () => {
        setDisplayValue((equation) => {
          const value = calculate(equation);
          return value;
        });
      },
    },
  ].map((buttonData): CalculatorButtonProps => ({ ...buttonData, disabled: getIsButtonDisabled(buttonData.value) }));

  return (
    <>
      {buttons.map((button) => (
        <CalculatorButton value={button.value} onClick={button.onClick} key={button.value} disabled={button.disabled} />
      ))}
    </>
  );
}

export default Keyboard;
