import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { filterOnlyObjectProperties } from "utils/fetchFusePoolData";
import useFuseAllUserAddresses from "hooks/fuse/useFuseAllUserAddresses"

// Dummy data
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 700, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page F', uv: 600, pv: 2400, amt: 2400 },
]


// function getUnderlyingNames(query: any) {
//   let pools = query.data.pools
//   let underlyingNames = []

//   for (let i = 0; i < pools.length; i++) {
//     let markets = pools[i].markets
//     for (let j = 0; j < markets.length; j++) {
//       underlyingNames.push(markets[i].underlyingName)
//     }
//   }

//   return underlyingNames
// }

const ExampleTimeSeries = () => {
  /**
   * @dev How to get certain data from the object returned from `useQuery()`:
   *
   * 1. `Market` typename:        subgraphData.data.pools[i].markets[i].__typename
   * 2. `Market` address:         subgraphData.data.pools[i].markets[i].id
   * 3. `Market` underlyingName:  subgraphData.data.pools[i].markets[i].underlyingName
   * 4. `Market` underlyingName:  subgraphData.data.pools[i].markets[i].totalSupply
   * 5. `Pool` id:                subgraphData.data.pools[i].id
   * 6. `Pool` index:             subgraphData.data.pools[i].index
   * 7. `Market` typename:        subgraphData.data.pools[i].__typename
   */
  // Get all addresses 
  const addresses = useFuseAllUserAddresses("")

  // Return statement
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart >
      <div style={{ padding: '20px', margin: '50px' }}>
        {
          <div style={{ padding: '20px', margin: '10px' }}>
            {addresses}
          </div>
        }
      </div>
    </div >
  )
}

export default ExampleTimeSeries