import { Location } from "@/app/types/location";
import styles from "./combobox.module.css";

interface ComboBoxProps {
  options: Location[];
  onChange: (query: string) => void;
  onSelect: (location: Location) => void;
}

const ComboBox = ({ options, onChange, onSelect }: ComboBoxProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.combobox}>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search for a location..."
        className={styles.input}
      />

      <ul className={styles.options}>
        {options.map((result) => (
          <li
            key={result.id}
            onClick={() => {
              onSelect(result);
            }}
          >
            {result.name}, {result.region}, {result.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComboBox;
