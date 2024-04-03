import { useCallback, useState, useEffect } from "react";

interface CountryFilterProps {
  filter: string;
  onFilterChange: (newFilter: string) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  const [inputValue, setInputValue] = useState(filter); 
  const maxLengthInput = 2; 
  const debounceTime = 500;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputCountryCode = e.target.value.toUpperCase();
      setInputValue(inputCountryCode);
    },
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilterChange(inputValue);
    }, debounceTime);

    return () => clearTimeout(timeoutId); 
  }, [inputValue, onFilterChange, debounceTime]); 

  return (
    <input
      type="text"
      placeholder="Write a country code. For example: EE"
      value={inputValue}
      maxLength={maxLengthInput}
      onChange={handleChange}
      className="my-4 px-4 py-2 w-full rounded focus:outline-none"
      data-testid="country-filter-input"
    />
  );
};

export default CountryFilter;
