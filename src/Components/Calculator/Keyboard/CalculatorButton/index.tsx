import { useContext } from "react";
import "./CalculatorButton.css";
import { CalculatorContext } from "@/context/CalculatorContext";

export type CalculatorButtonProps = { value: string; onClick?: () => void; disabled?: boolean };

function CalculatorButton({ value, onClick, disabled = false }: CalculatorButtonProps) {
  const calculatorContext = useContext(CalculatorContext);
  if (!calculatorContext) throw new Error("calculator Context is unavailable");
  const { setDisplayValue } = calculatorContext;

  const defaultOnClick = () => {
    setDisplayValue((currentDisplayValue) => currentDisplayValue + value);
  };

  return (
    <button className="calculatorButton" onClick={onClick || defaultOnClick} disabled={disabled}>
      {value}
    </button>
  );
}

export default CalculatorButton;
