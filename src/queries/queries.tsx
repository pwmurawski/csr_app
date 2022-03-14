import { gql } from "@apollo/client";

export const GET_COUNTRIES_AND_CONTINENTS = gql`
  query CountriesAndContinents {
    countries {
      name
      code
      continent {
        code
      }
    }
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      languages {
        name
      }
      code
      emoji
    }
  }
`;
