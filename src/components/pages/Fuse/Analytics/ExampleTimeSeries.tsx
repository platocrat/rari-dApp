import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const API_URL = "https://api.thegraph.com/subgraphs/name/platocrat/fuse-subgraph";

const TOTAL_SUPPLY_PER_MARKET_IN_POOL_0 = gql`
 query  {
    pools(orderBy: index, orderDirection: asc, first: 1) {
      id
      index
      markets(orderBy: totalSupply, first: 10) {
        id
        underlyingName
        totalSupply
      }
    }
  }
`

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
});

// Dummy data
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 700, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page F', uv: 600, pv: 2400, amt: 2400 },
]

const ExampleTimeSeries = () => {
  /**
   * @dev How to get certain data from the object returned from `useQuery()`:
   *
   * 2. `Market` typename:        subgraphData.data.pools[0].__typename
   * 2. `Market` address:         subgraphData.data.pools[0].id
   * 3. `Market` underlyingName:  subgraphData.data.pools[0].underlyingName
   * 4. `Market` underlyingName:  subgraphData.data.pools[0].totalSupply
   */
  const subgraphData = useQuery(
    TOTAL_SUPPLY_PER_MARKET_IN_POOL_0,
    {
      client: client
    }
  )

  console.log(
    '\n Subgraph data using useQuery from ApolloClient: ',
    subgraphData.data
  )

  // function runSubgraphQuery() {
  //   const subgraphQuery = client
  //     .query({ query: tokensQuery })
  //     .then(data => {
  //       return data
  //     })
  //     .catch(error => {
  //       return console.error(
  //         '\n Subgraph query failed with the following error: ',
  //         error
  //       )
  //     })

  //   return subgraphQuery
  // }

  // const subgraphData = runSubgraphQuery()
  // console.log('\n Subgraph data: ', subgraphData.then(data => {
  //   return data
  // }))

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
        {subgraphData.data ?
          <div style={{ padding: '20px', margin: '10px' }}>
            {
              /**
               * @dev Need to be able to render this to test other queries
               */
              subgraphData.data.pools.map((index: number) => {
                <div key={index}>
                  {subgraphData.data.pools[index].underlyingName}
                </div>
              })
            }
          </div>
          :
          <div style={{ padding: '20px' }}>
            Loading data
          </div>
        }
      </div>
    </div>
  )
}

export default ExampleTimeSeries