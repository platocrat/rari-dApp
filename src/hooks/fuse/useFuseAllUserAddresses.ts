import { makeGqlRequest } from "utils/makeGqlRequest";
import { GET_ALL_USER_ADDRESSES } from "../../utils/gql/getAllUserAddresses"

export type Account = {
  id: string;
}

export default async function useFuseAllUserAddresses(
  lastID: string
): Promise<Account[] | undefined> {
  const addresses: Account[] | undefined = await makeGqlRequest(GET_ALL_USER_ADDRESSES)

  return addresses
}