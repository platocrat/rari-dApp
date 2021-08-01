/* External imports */
import axios from "axios";
import useSWR from "swr";

export interface PoolUserAssets {
  cToken: string;
  underlyingToken:string ;
  underlyingName: string;
  underlyingSymbol: string;
  underlyingDecimals: string;
  underlyingBalance: string;
  supplyRatePerBlock: string;
  borrowRatePerBlock: string;
  totalSupply: string;
  totalBorrow: string;
  supplyBalance: string;
  borrowBalance: string;
  liquidity: string;
  membership: boolean;
  exchangeRate: string;
  underlyingPrice: string;
  oracle: string;
  collateralFactor: string;
  reserveFactor: string;
  adminFee: string;
  fuseFee: string;
  supplyBalanceUSD: number;
  borrowBalanceUSD: number;
  totalSupplyUSD: number;
  totalBorrowUSD: number;
  liquidityUSD: number;
}

export interface PoolUserData {
  assets: PoolUserAssets[];
  comptroller: string;
  name: string;
  totalLiquidityUSD: number;
  totalSuppliedUSD: number;
  totalBorrowedUSD: number;
  totalSupplyBalanceUSD: number;
  totalBorrowBalanceUSD: number;
  id: number;
}

export interface PoolUserTotals {
  totalBorrowsUSD: number;
  totalSuppliedUSD: number;
}

export interface PoolUser {
  pools: PoolUserData[];
  userAddress: string;
  totals: PoolUserTotals;
}

const FUSE_POOL_USER_BALANCES_URL = "https://beta.rari.capital/api/accounts/fuse/balances?address=";


function useFuseUserBalances(userAddress: string) {
  const url = FUSE_POOL_USER_BALANCES_URL + userAddress;
  const { data, error } = useSWR(url, getFusePoolUserData);

  console.log(`Data and error: `, {data, error});
  return data;
}

const getFusePoolUserData = async (
  route: string
): Promise<PoolUser[]> => {
  const { data } = await axios.get(route);
  return data;
};

export default useFuseUserBalances