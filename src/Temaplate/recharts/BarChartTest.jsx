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
  BarChart,
  Bar,
} from "recharts";

const BarChartTest = () => {
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
            Bar Chart | Recharts
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <BarChart width={500} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label value="2023" offset={-4} position="insideBottomLeft" />
              </XAxis>
              <YAxis>
                <Label value="sales" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Legend />
              <Bar dataKey="Vivel" fill="#8884d8" />
              <Bar dataKey="Engage" fill="#82ca9d" />
            </BarChart>
            <Typography color={colors.green[500]} textAlign="center">
              Type: Simple
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Vivel" stackId="a" fill="#8884d8" />
              <Bar dataKey="Engage" stackId="a" fill="#82ca9d" />
            </BarChart>

            <Typography color={colors.green[500]} textAlign="center">
              Type: Stacked
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BarChartTest;

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
