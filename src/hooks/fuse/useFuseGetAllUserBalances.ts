import axios from "axios"

const FUSE_ACCOUNT_BALANCES_API_ENDPOINT = "https://beta.rari.capital/api/accounts/fuse/balances?address=";


async function getFuseUserBalanceJSON(userAddress: string) {
  const userBalanceURL = FUSE_ACCOUNT_BALANCES_API_ENDPOINT + userAddress;
  const userBalanceJSON = await axios(userBalanceURL);
  return userBalanceJSON;
}

export default function getAllUserBalances(allAddresses: string[]) {
  let userBalances = [];

  for (let i = 0; i < allAddresses.length; i++) {
    userBalances.push(getFuseUserBalanceJSON(allAddresses[i]));
  }

  return userBalances;
}

