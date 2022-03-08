import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      code
      continent {
        code
      }
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

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;
