import { gql } from '@apollo/client';

export interface Country {
  country :{
    code: string;
    name: string;
  }
}

export interface Filter {
  code: string;
}

export const countriesQuery = gql`
query Countries($code: ID!) {
  country(code: $code) {
    name
    code
  }
}
`;
