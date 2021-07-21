import { useQuery } from '@apollo/client';
import { client } from 'utils/apolloClient'
import { GET_ALL_USER_ADDRESSES } from "utils/gql/GET_ALL_USER_ADDRESSES";

export type Account = {
  id: string;
};

export default function useGetAllUserAddresses(lastID: string) {
  const { loading, error, data } = useQuery(GET_ALL_USER_ADDRESSES, {
    client: client,
    variables: {
      lastID
    }
  });

  if (loading) return 'Loading data';
  if (error) return `ApolloClient useQuery error! ${ error }`;

  return data;
};
