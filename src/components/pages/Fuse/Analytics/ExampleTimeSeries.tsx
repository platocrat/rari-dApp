import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { useTVLsSinceStartDate } from "utils/useFuseTVLs";

// Dummy data
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 700, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page F', uv: 600, pv: 2400, amt: 2400 },
]

interface OrderedTVL {
  index: number;
  id: string;
  totalSuppliedUSD: number;
  totalBorrowedUSD: number;
  ethUSDPrice: number;
  blockTimestamp: string;
  blockNumber: number;
  blockDate: string;
}

const ExampleTimeSeries = () => {
  let tvls: any = useTVLsSinceStartDate('18-03-2021');
  tvls ? tvls = tvls.data : tvls = tvls;

  console.log('Total borrow and supply in usd: ', tvls);

  let orderedTVLs: OrderedTVL[];

  /**
   * @todo Convert array of TVL objects to a new _ordered_ array of TVL objects.
   *       Also, add an `index` field to each TVL object by using OrderedTVL
   *       interface.
   */
  function orderTVLs() {
    const _tvls = tvls.data;

    return orderedTVLs;
  }

  // Return statement
  return (
    <div>
      <LineChart
        width={900}
        height={300}
        data={tvls}
        margin={{ top: 15, right: 40, bottom: 15, left: 40 }}
      >
        <Line type="monotone" dataKey="totalBorrowedUSD" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="blockDate" />
        <YAxis />
        <Tooltip />
      </LineChart >
    </div >
  )
}

export default ExampleTimeSeries