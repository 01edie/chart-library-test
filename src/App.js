import { LineChart, CartesianGrid,XAxis,YAxis ,Tooltip,Legend,Line } from "recharts";
import './App.css'
import Dashboard from './Temaplate/Dashboard'


function App() {
  return (
    <div className="">
     <Dashboard/>
    </div>
  );
}

export default App;

{/* <div className="chart">
<LineChart
width={730}
height={250}
data={data}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="pv" stroke="#8884d8" />
<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
</div> */}


