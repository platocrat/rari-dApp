import { gql } from "@apollo/client";

export const GET_ALL_USER_ADDRESSES = gql`
  query GetAllUserAddresses($lastID: String) {
    accounts(
      orderBy: id, 
      orderDirection: asc, 
      first: 1000, 
      where: {id_gt: $lastID }
    ) {
      id
    }
  }
`;