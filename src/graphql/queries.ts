import { gql } from '@apollo/client';

export interface Country {
  countries: {
    code: string;
    name: string;
  }[]
}

export interface Filter {
  code: string;
}

export const allCountriesQuery = gql`
  query AllCountries {
    countries {
      code
      name
    }
  }
`;

export const filteredCountryQuery = gql`
  query FilteredCountry($eq: String) {
    countries(filter: { code: { eq: $eq } }) {
      code
      name
    }
  }
`;
