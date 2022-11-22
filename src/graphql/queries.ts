import { gql } from "@apollo/client";

export const GET_CHARACTERES = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      gender
    }
  }
`;
