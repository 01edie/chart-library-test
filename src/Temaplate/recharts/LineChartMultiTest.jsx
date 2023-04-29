import { colors, Grid, Paper, Box, Typography, Stack } from "@mui/material";
import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Line,
  Label,
  AreaChart,
  Area,
} from "recharts";

const LineChartMultiTest = () => {
  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          // height: "70vh",
          paddingBottom: 5,
        }}
      >
        <Box marginBottom={5}>
          <Typography textAlign="center" variant="h6">
            Double Line Chart | Recharts
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <LineChart
              width={450}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                {/* label={{ value: 'Sales of Vivel in 2023',offset:2,  position: 'bottom' }}  */}
                <Label value="2023" offset={-4} position="insideBottomLeft" />
              </XAxis>
              <YAxis>
                <Label value="sales" angle={-90} position="left" />
              </YAxis>
              <Tooltip payload={[{ name: "05-01", value: 12, unit: "kg" }]} />
              <Legend />
              <Line
                type="linear"
                dataKey="Vivel"
                stroke={colors.deepOrange[300]}
              />
              <Line type="step" dataKey="Engage" stroke={colors.indigo[600]} />
            </LineChart>
            <Typography color={colors.green[500]} textAlign="center">
              Type: Linear and Step
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <AreaChart
              width={450}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorVivel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name"></XAxis>
              <YAxis></YAxis>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotoneY"
                dataKey="Vivel"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorVivel)"
              />
              <Area
                type="monotoneX"
                dataKey="Engage"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorEngage)"
              />
            </AreaChart>
            <Box display='flex' gap={2} justifyContent='center'>
              <Typography display='inline' color="#8884d8" textAlign="center">
                Vivel
              </Typography>
              <Typography display='inline' color="#82ca9d" textAlign="center">
                Engage
              </Typography>
            </Box>
            <Typography color={colors.green[500]} textAlign="center">
              Type: monotoneY and monotoneX
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LineChartMultiTest;

const data = [
  {
    name: "Jan",
    Engage: 4000,
    Vivel: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Engage: 3000,
    Vivel: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Engage: 2000,
    Vivel: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Engage: 2780,
    Vivel: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Engage: 1890,
    Vivel: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    Engage: 2390,
    Vivel: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    Engage: 3490,
    Vivel: 4300,
    amt: 2100,
  },
];
