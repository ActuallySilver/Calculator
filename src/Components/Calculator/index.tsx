import { useState } from "react";
import Screen from "./Screen";
import Keyboard from "./Keyboard";
import { CalculatorContext } from "@/context/CalculatorContext";
import "./calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="calculator">
      <CalculatorContext.Provider value={{ displayValue, setDisplayValue }}>
        <Screen />
        <Keyboard />
      </CalculatorContext.Provider>
    </div>
  );
}

export default Calculator;
