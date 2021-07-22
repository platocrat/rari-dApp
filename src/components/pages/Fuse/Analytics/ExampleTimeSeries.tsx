import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import fuseTotalBorrowAndSupplyUSD from "utils/fuseTotalBorrowAndSupplyUSD";
import useSWR from "swr";
import { useState } from "react";
import { useEffect } from "react";

// Dummy data
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 700, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page F', uv: 600, pv: 2400, amt: 2400 },
]

// function useTotalSuppliedAndBorrowedUSD(_blockNumbers: number[]) {
//   const [totalSuppliedAndBorrowedUSD, setTotalSuppliedAndBorrowedUSD] = useState([])
//   let TSLBS_USD: any = []

//   useEffect(() => {
//     for (let i = 0; i < _blockNumbers.length; i++) {
//       TSLBS_USD.push(fuseTotalBorrowAndSupplyUSD(_blockNumbers[i]))
//     }

//     setTotalSuppliedAndBorrowedUSD(TSLBS_USD as any)
//   })


//   return totalSuppliedAndBorrowedUSD
// }

function useTSB_USD() {
  const [totalSuppliedAndBorrowedUSD, setTotalSuppliedAndBorrowedUSD] = useState([])

  useEffect(() => {
    fuseTotalBorrowAndSupplyUSD()
      .then((totalSuppliedAndBorrowedUSD: any) => {
        setTotalSuppliedAndBorrowedUSD(totalSuppliedAndBorrowedUSD)
      })
  }, [])

  return totalSuppliedAndBorrowedUSD
}

const ExampleTimeSeries = () => {
  // console.log('TotalBorrowAndSupplyUSD: ', totalBorrowAndSupplyUSD)
  const totalSuppliedAndBorrowedUSD = useTSB_USD()

  // eslint-disable-next-line react-hooks/rules-of-hooks


  // const totalBorrowAndSupplyUSD = fuseTotalBorrowAndSupplyUSD(blockNumbers[0])


  console.log('Total borrow and suppl usd: ', totalSuppliedAndBorrowedUSD)

  // Return statement
  return (
    <div>
      <LineChart
        width={900}
        height={300}
        data={totalSuppliedAndBorrowedUSD}
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