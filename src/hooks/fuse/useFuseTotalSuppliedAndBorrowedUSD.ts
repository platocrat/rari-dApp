/* External imports */
import axios from "axios";
import useSWR from "swr";

/* Internal imports */
import Rari from "../../rari-sdk/index";
import {
  turboGethURL,
} from "../../utils/web3Providers";

export interface APIFuseTVL {
  totalSuppliedUSD: number;
  totalBorrowedUSD: number;
}

const FUSE_TOTAL_BORROW_AND_SUPPLY_USD_URL = "https://beta.rari.capital/api/fuse/tvl?blockNumber=";
const rari = new Rari(turboGethURL);
const FUSE_FIRST_BLOCKNUMBER = 12060024

export default async function useFuseTotalSuppliedAndBorrowedUSD() {
  const blockNumbers = await fuseHistoricalBlockNumbers()
  let TSB_USD: any = []

  for (let i = 0; i < blockNumbers.length; i++) {
    TSB_USD.push(fuseTotalBorrowAndSupplyUSD(blockNumbers[i]))
  }

  return TSB_USD
}


async function fuseHistoricalBlockNumbers() {
  let blockNumbers: number[] = []
  const currentBlockNumber = await rari.web3.eth.getBlockNumber()

  for (let i = FUSE_FIRST_BLOCKNUMBER; i < currentBlockNumber; i++) {
    blockNumbers.push(i)
  }

  return blockNumbers
}

function fuseTotalBorrowAndSupplyUSD(blockNumber_: number) {
  const { data, error } = useSWR(
    FUSE_TOTAL_BORROW_AND_SUPPLY_USD_URL + blockNumber_,
    getTotalSupplyAndBorrowUSD
  );

  console.log('Data and error: ', { data, error })
  return data;
}

const getTotalSupplyAndBorrowUSD = async (
  route: string
): Promise<APIFuseTVL[]> => {
  const { data } = await axios.get(route);
  return data;
};