import { useState } from "react";
import Screen from "./Screen";
import Keyboard from "./Keyboard";
import { CalculatorContext } from "@/context/CalculatorContext";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");

  return (
    <>
      <CalculatorContext.Provider value={{ displayValue, setDisplayValue }}>
        <Screen />
        <Keyboard />
      </CalculatorContext.Provider>
    </>
  );
}

export default Calculator;
