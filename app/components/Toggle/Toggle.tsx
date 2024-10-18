import { useState } from "react";
import "./Toggle.css";

interface ToggleProps {
  // options: string[];
  defaultOption?: string;
  onToggle: (option: string) => void;
}

const Toggle = ({ defaultOption, onToggle }: ToggleProps) => {
  const options = ["°C", "°F"];

  const [selectedOption, setSelectedOption] = useState<string>(
    // TODO: find defaultOption in list of options
    defaultOption || options[0]
  );

  const handleToggle = (option: string) => {
    setSelectedOption(option);
    onToggle(option);
  };

  return (
    <div className="toggle-container">
      {options.map((option) => (
        <button
          key={option}
          className={`toggle-button ${selectedOption === option && "active"}`}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
