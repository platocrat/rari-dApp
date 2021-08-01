import { 
  AreaChart, 
  Area, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Label 
} from "recharts";
import useFuseUserBalances from "hooks/fuse/useFuseUserBalances";

const contentStyle = {
  color: '#8884d8',
  fontSize: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backgroundOpactiy: '0.5',
  border: '1px solid #8884d8',
  filter: 'drop-shadow(0 0 0.3rem #CBC3E3)',
  borderRadius: '15px'
}

const FuseUserCapital = () => {
  const userAddress = '0x6997060D6bA220d8A0B102e0003Fe12796b874bd'
  let balances: any = useFuseUserBalances(userAddress);
  balances ? balances = balances.data : balances = balances;

  // Return statement
  return (
    <AreaChart
      width={900}
      height={450}
      data={balances}
      margin={{ top: 35, right: 0, bottom: 35, left: 60 }}
    >
      <Area type="monotone" dataKey="totalBorrowedUSD" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="0.03" />
      <XAxis 
        dataKey="blockDate" 
        label={{ value: 'DD-MM-YYYY', position: 'bottom', fill: '#8884d8' }}
      />
      {
      /**
       * @todo Need to positioning of label so that it's not offset
       */
      }
      <YAxis 
        label={{ value: 'Total Borrowed in USD$ (cumulative)', offset: '', position: 'topcenter', angle: -90, fill: '#8884d8' }}
      />
      <Tooltip contentStyle={contentStyle} />
    </AreaChart >
  )
}

export default FuseUserCapital