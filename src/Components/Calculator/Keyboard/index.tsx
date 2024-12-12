import { useContext } from "react";
import CalculatorButton, { CalculatorButtonProps } from "./CalculatorButton";
import { CalculatorContext } from "@/context/CalculatorContext";

function Keyboard() {
  const calculatorContext = useContext(CalculatorContext);
  if (!calculatorContext) throw new Error("calculator Context is unavailable");
  const { setDisplayValue } = calculatorContext;

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
  ];

  return (
    <>
      {buttons.map((button) => (
        <CalculatorButton value={button.value} onClick={button.onClick} />
      ))}
    </>
  );
}

export default Keyboard;
