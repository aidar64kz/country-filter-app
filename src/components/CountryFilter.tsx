import { useCallback } from "react";

interface CountryFilterProps {
  filter: string;
  onFilterChange: (newFilter: string) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  const maxLengthInput = 2 // Predefined maximum length of country code input
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputCountryCode = e.target.value.toUpperCase();
        onFilterChange(inputCountryCode);
    },
    [onFilterChange]
  );

  return (
    <input
      type="text"
      placeholder="Write a country code. For example: EE"
      value={filter}
      maxLength={maxLengthInput}
      onChange={handleChange}
      className="my-4 px-4 py-2  min-w-[500px] rounded focus:outline-none"
      data-testid="country-filter-input" 
    />
  );
};

export default CountryFilter;
