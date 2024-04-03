import { useQuery } from "@apollo/client";
import { allCountriesQuery, filteredCountryQuery, Country } from "../graphql/queries";


export default function useCountryQuery(countryCode?: string) {
  const query = countryCode ? filteredCountryQuery : allCountriesQuery;
   const { data, loading, error } = useQuery<Country>(query, {
    variables: countryCode ? { eq: countryCode } : undefined, 
  });

  return { data, loading, error };
}
