import { createContext, Dispatch } from "react";

type CalculatorContextType = { displayValue: string; setDisplayValue: Dispatch<React.SetStateAction<string>> };

export const CalculatorContext = createContext<CalculatorContextType | null>(null);
