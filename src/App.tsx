import React, { useState } from "react";
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";
import useCountryQuery from "./hooks/useCountryQuery";


const App: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>("");

  const { data, loading, error } = useCountryQuery( countryCode );

  return (
    <div className="flex flex-col max-h-full items-center">
      <h1 className="text-white text-4xl mt-32 mb-8">Country Filter App</h1>
      <div className="w-1/2">
        <CountryFilter filter={countryCode} onFilterChange={(value)=>setCountryCode(value)} />
        <CountryList loading={loading} error={error} data={data} />
      </div>
    </div>
  );
};

export default App;


