import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { useQuery } from '@apollo/client';

import { filterOnlyObjectProperties } from "utils/fetchFusePoolData";
import { client } from 'utils/apolloClient'
import { GET_ALL_USER_ADDRESSES } from "utils/gql/GET_ALL_USER_ADDRESSES";
import useGetAllUserAddresses, { Account } from "hooks/fuse/useFuseGetAllUserAddresses";
import getAllUserBalances from "hooks/fuse/useFuseGetAllUserBalances";

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


const getAllAddresses = (query: any) => {
  let accounts = query.accounts
  let addresses = []

  if (accounts) {
    for (let i = 0; i < accounts.length; i++) {
      let id = accounts[i].id
      addresses.push(id)
    }
  }

  return addresses
}



const ExampleTimeSeries = () => {
  // Get all addresses 
  const addresses = getAllAddresses(useGetAllUserAddresses(""))

  let addresses_ = useGetAllUserAddresses("")

  function convertToObjectHashMap() {
    const accounts = addresses_.accounts

    let hashMap: UserAddress
    let arrayOfHashMap = []

    if (accounts) {
      for (let i = 0; i < accounts.length; i++) {
        hashMap = {
          index: 0,
          userAddress: ''
        }
        hashMap.index = i
        hashMap.userAddress = accounts[i].id
        arrayOfHashMap.push(hashMap)
      }
    }

    return arrayOfHashMap
  }

  console.log(
    '1000 user addresses returned from subgraph query: \n',
    // getAllAddresses(useGetAllUserAddresses(""))
    getAllUserBalances(addresses)
  )

  console.log(
    '1000 user addresses returned from subgraph query: \n',
    // getAllAddresses(useGetAllUserAddresses(""))
    getAllUserBalances(addresses)
  )

  // Return statement
  return (
    <div>
      <LineChart
        width={900}
        height={300}
        data={convertToObjectHashMap()}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="userAddress" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
      </LineChart >
    </div >
  )
}

export default ExampleTimeSeries