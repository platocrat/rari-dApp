import { 
  AreaChart, 
  Area, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Label 
} from "recharts";
import { useTVLsSinceStartDate } from "hooks/fuse/useFuseTVLs";


// interface OrderedTVL {
//   index: number;
//   id: string;
//   totalSuppliedUSD: string | number;
//   totalBorrowedUSD: string | number;
//   ethUSDPrice: string | number;
//   blockTimestamp: string;
//   blockNumber: number;
//   blockDate: string;
// }

const data = [
  {  name: 'Page A',  uv: 4000,  pv: 2400,  amt: 350 },
  {  name: 'Page B',  uv: 3000,  pv: 1398,  amt: 1210 },
  {  name: 'Page C',  uv: 2000,  pv: 1490,  amt: 2290 },
  {  name: 'Page D',  uv: 2780,  pv: 2008,  amt: 1940 },
  {  name: 'Page E',  uv: 1890,  pv: 520,  amt: 2181 },
  {  name: 'Page F',  uv: 2390,  pv: 2008,  amt: 3711 },
  {  name: 'Page G',  uv: 3490,  pv: 3990,  amt: 4100 }
];

const contentStyle = {
  color: '#8884d8',
  fontSize: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backgroundOpactiy: '0.5',
  border: '1px solid #8884d8',
  filter: 'drop-shadow(0 0 0.3rem #CBC3E3)',
  borderRadius: '15px'
}

const FuseTotalSuppliedUSD = () => {
  let tvls: any = useTVLsSinceStartDate('18-03-2021');
  tvls ? tvls = tvls.data : tvls = tvls;


  // Return statement
  return (
    <div>
      {tvls ?
        <AreaChart
          width={900}
          height={450}
          data={tvls}
          margin={{ top: 35, right: 0, bottom: 35, left: 60 }}
        >
          <Area type="monotone" dataKey="totalSuppliedUSD" stroke="#8884d8" />
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
            label={{ value: 'USD$', offset: '45', position: 'left', angle: -90, fill: '#8884d8' }}
          />
          {/**
           * @todo Need to add a tooltip that has a date formatted to datetime
           * 
           * Additional features:      
           *     1. compute change from previous day
           *     2. display totalBorrowedUSD and totalSuppliedUSD per asset
           */}
          <Tooltip contentStyle={contentStyle} />
        </AreaChart >
        : 
        <AreaChart
          width={900}
          height={450}
          data={data}
          margin={{ top: 35, right: 0, bottom: 35, left: 60 }}
        >
          <Area type="monotone" dataKey="pv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="0.03" />
          <XAxis 
            dataKey="names" 
            label={{ value: 'X-axis', position: 'bottom', fill: '#8884d8' }}
          />
          <YAxis
            dataKey="uv"
            label={{ value: 'Y-axis', offset: '25', position: 'left', angle: -90, fill: '#8884d8' }}
          />
          <Tooltip contentStyle={contentStyle} />
        </AreaChart >
      }
    </div>
  )
}

export default FuseTotalSuppliedUSD