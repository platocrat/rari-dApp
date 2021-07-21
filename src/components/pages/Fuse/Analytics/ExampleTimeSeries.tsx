import { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

import { filterOnlyObjectProperties } from "utils/fetchFusePoolData";
import useFuseTotalBorrowAndSupplyUSD from "hooks/fuse/useFuseTotalBorrowAndSupplyUSD";
import { useEffect } from "react";

export type QueriedAccounts = {
  accounts: string[]
}

interface UserAddress {
  index: number;
  userAddress: string;
}

// Dummy data
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 700, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page F', uv: 600, pv: 2400, amt: 2400 },
]


function historicalTotalBorrowAndSupplyUSD() {

}

const ExampleTimeSeries = () => {
  const totalBorrowAndSupplyUSD: any = useFuseTotalBorrowAndSupplyUSD()

  console.log('TotalBorrowAndSupplyUSD: ', totalBorrowAndSupplyUSD)
  // Return statement
  return (
    <div>
      <LineChart
        width={900}
        height={300}
        data={totalBorrowAndSupplyUSD}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="totalBorrowedUSD" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="" />
        <YAxis />
        <Tooltip />
      </LineChart >
    </div >
  )
}

export default ExampleTimeSeries