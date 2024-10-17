import { Location } from "@/app/types/location";
import "./combobox.css";

interface ComboboxProps {
  options: Location[];
  onChange: (query: string) => void;
  onSelect: (location: Location) => void;
}

const Combobox = ({ options, onChange, onSelect }: ComboboxProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const isExpanded = options.length > 0;

  return (
    <div
      className="combobox"
      role="combobox"
      aria-expanded={isExpanded}
      aria-controls="dropdown-list"
    >
      <div className="search-bar">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2508 8.12381C16.2508 9.91652 15.6687 11.5725 14.6882 12.9161L19.6338 17.8646C20.1221 18.3528 20.1221 19.1456 19.6338 19.6338C19.1455 20.1221 18.3525 20.1221 17.8642 19.6338L12.9186 14.6853C11.5748 15.6696 9.91845 16.2476 8.1254 16.2476C3.6369 16.2476 0 12.6114 0 8.12381C0 3.63619 3.6369 0 8.1254 0C12.6139 0 16.2508 3.63619 16.2508 8.12381ZM8.1254 13.748C8.86412 13.748 9.59561 13.6025 10.2781 13.3199C10.9606 13.0372 11.5807 12.623 12.1031 12.1007C12.6254 11.5784 13.0398 10.9584 13.3225 10.2761C13.6052 9.59373 13.7507 8.86239 13.7507 8.12381C13.7507 7.38523 13.6052 6.65389 13.3225 5.97153C13.0398 5.28917 12.6254 4.66917 12.1031 4.14692C11.5807 3.62466 10.9606 3.21039 10.2781 2.92775C9.59561 2.64511 8.86412 2.49963 8.1254 2.49963C7.38667 2.49963 6.65519 2.64511 5.9727 2.92775C5.29021 3.21039 4.67008 3.62466 4.14773 4.14692C3.62537 4.66917 3.21102 5.28917 2.92832 5.97153C2.64562 6.65389 2.50012 7.38523 2.50012 8.12381C2.50012 8.86239 2.64562 9.59373 2.92832 10.2761C3.21102 10.9584 3.62537 11.5784 4.14773 12.1007C4.67008 12.623 5.29021 13.0372 5.9727 13.3199C6.65519 13.6025 7.38667 13.748 8.1254 13.748Z"
            fill="white"
          />
        </svg>

        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
          className="input"
          aria-label="Search locations"
        />
      </div>

      {isExpanded && (
        <ul className="dropdown-list" id="dropdown-list">
          {options.map((result) => (
            <li className="list-item" key={result.id}>
              <button
                title={`${result.name}, ${result.region}, ${result.country}`}
                aria-label={`${result.name}, ${result.region}, ${result.country}`}
                onClick={() => {
                  onSelect(result);
                }}
              >
                <span>
                  {result.name}, {result.region}
                </span>
                <span className="country">{result.country}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Combobox;