/* External imports */
import axios from "axios";
import useSWR from "swr";

export interface APIFuseTVL {
  totalSuppliedUSD: number;
  totalBorrowedUSD: number;
}

const FUSE_TVLS_SINCE_START_BLOCK_URL = "https://beta.rari.capital/api/fuse/tvlRange?;startBlock=";
const FUSE_TVLS_SINCE_START_DATE_URL = "https://beta.rari.capital/api/fuse/tvlRange?startDate=";

function useTVLsSinceStartBlock(startBlock: number) {
  const url = FUSE_TVLS_SINCE_START_BLOCK_URL + startBlock.toString();
  const { data, error } = useSWR(url, getTVLs);
  
  console.log(`Data and error: `, {data, error});
  return data;
}

function useTVLsSinceStartToEndBlock(startBlock: number, endBlock: number) {
  const url = `https://beta.rari.capital/api/fuse/tvlRange?startBlock=${startBlock}&endBlock=${endBlock}`
  const { data, error } = useSWR(url, getTVLs);

  console.log(`Data and error: `, {data, error});
  return data;
}

function useTVLsSinceStartDate(startDate: string) {
  const url = FUSE_TVLS_SINCE_START_DATE_URL + startDate;
  const { data, error } = useSWR(url, getTVLs);

  console.log(`Data and error: `, {data, error});
  return data;
}

function useTVLsSinceStartAndEndDate(startDate: string, endDate: string) {
  const url = `https://beta.rari.capital/api/fuse/tvlRange?startDate=${startDate}&endDate=${endDate}`;
  const { data, error } = useSWR(url, getTVLs);

  console.log(`Data and error: `, {data, error});
  return data;
}

const getTVLs = async (
  route: string
): Promise<APIFuseTVL[]> => {
  const { data } = await axios.get(route);
  return data;
};

export {
  useTVLsSinceStartBlock,
  useTVLsSinceStartToEndBlock,
  useTVLsSinceStartDate,
  useTVLsSinceStartAndEndDate
}