import { useQuery } from "@apollo/client";
import { countriesQuery, Country, Filter } from "../graphql/queries";


export default function useCountryQuery(countryCode: string, countryCodeInputLength: number) {
  const { data, loading, error } = useQuery<Country, Filter>(countriesQuery, {
    variables: { code: countryCode},
    skip: countryCode.length !== countryCodeInputLength
  });


  return { data, loading, error };
}
