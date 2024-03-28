import React, { useState } from "react";
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";
import useCountryQuery from "./hooks/useCountryQuery";


const App: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>("");
  const countryCodeInputLength = 2 // Predefined length of country code for fetching data

  const { data, loading, error } = useCountryQuery( countryCode, countryCodeInputLength );

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-cyan-400 to-blue-600">
      <h1 className="text-white text-4xl mt-32 mb-8">Country Filter App</h1>
      <CountryFilter filter={countryCode} onFilterChange={(value)=>setCountryCode(value)} />
      <div className="mt-4">
        <CountryList loading={loading} error={error} data={data} />
      </div>
    </div>
  );
};

export default App;


