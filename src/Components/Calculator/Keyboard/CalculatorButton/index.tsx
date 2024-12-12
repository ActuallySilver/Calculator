import { useContext } from "react";
import "./CalculatorButton.css";
import { CalculatorContext } from "@/Context/CalculatorContext";

export type CalculatorButtonProps = { value: string; onClick?: () => void };

function CalculatorButton({ value, onClick }: CalculatorButtonProps) {
  const calculatorContext = useContext(CalculatorContext);
  if (!calculatorContext) throw new Error("calculator Context is unavailable");
  const { setDisplayValue } = calculatorContext;

  const defaultOnClick = () => {
    setDisplayValue((currentDisplayValue) => currentDisplayValue + value);
  };

  return (
    <button className="calculatorButton" onClick={onClick || defaultOnClick}>
      {value}
    </button>
  );
}

export default CalculatorButton;
