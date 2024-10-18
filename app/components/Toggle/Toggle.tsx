import { useState } from "react";
import "./Toggle.css";

export interface ToggleProps {
  options: {
    label: string;
    value: string;
  }[];
  defaultOptionIndex?: number;
  onClick: (option: string) => void;
}

const Toggle = ({ options, defaultOptionIndex, onClick }: ToggleProps) => {
  const defaultOption = defaultOptionIndex
    ? options[defaultOptionIndex].value
    : options[0].value;

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleClick = (option: string) => {
    setSelectedOption(option);
    onClick(option);
  };

  return (
    <div className="toggle-container">
      {options.map((option) => (
        <button
          key={option.value}
          className={`toggle-button ${
            selectedOption === option.value && "active"
          }`}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
