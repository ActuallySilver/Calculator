import { useContext } from "react";
import { CalculatorContext } from "@/context/CalculatorContext";

function Screen() {
  const calculatorContext = useContext(CalculatorContext);
  if (!calculatorContext) throw new Error("calculator Context is unavailable");
  const { displayValue } = calculatorContext;

  return <div>{displayValue}</div>;
}

export default Screen;
