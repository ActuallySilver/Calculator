import CalculatorButton, { CalculatorButtonProps } from "./CalculatorButton";

function Keyboard() {
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
