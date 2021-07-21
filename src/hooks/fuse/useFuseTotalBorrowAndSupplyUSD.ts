import axios from "axios";
import useSWR from "swr";

export interface APIFuseTVL {
  totalSuppliedUSD: number;
  totalBorrowedUSD: number;
}

const FUSE_TOTAL_BORROW_AND_SUPPLY_USD = "https://beta.rari.capital/api/fuse/tvl";

export default function useFuseTotalBorrowAndSupplyUSD() {
  const { data, error } = useSWR(
    FUSE_TOTAL_BORROW_AND_SUPPLY_USD,
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