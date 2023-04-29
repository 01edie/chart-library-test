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
  ResponsiveContainer,
} from "recharts";

const StatesTest = () => {
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
            States | Recharts
          </Typography>
        </Box>
        <Grid container spacing={2} height="60vh">
          <Grid item xs={12} lg={6} height={"90%"}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={50} data={states}>
                <XAxis dataKey="name">
                  <Label value="States in India" offset={-4} position="insideBottomLeft" />
                </XAxis>
                <YAxis>
                  <Label value="2011 literacy rates" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="literacy" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
        <Grid container  height="50vh">
          <Grid item xs={12} lg={12} height={"100%"}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={50} data={states}>
                <XAxis dataKey="name">
                  <Label value="States in India" offset={-4} position="insideBottomLeft" />
                </XAxis>
                <YAxis>
                  <Label value="2011 literacy rates" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="literacy" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default StatesTest;

const data = [
  {
    name: "Jan",
    Vivel: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Vivel: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Vivel: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Vivel: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Vivel: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    Vivel: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    Vivel: 4300,
    amt: 2100,
  },
];

const states = [
  {
    stateId: 1,
    name: "Andhra Pradesh",
    literacy: 67,
  },
  {
    stateId: 2,
    name: "Arunachal Pradesh",
    literacy: 65.4,
  },
  {
    stateId: 3,
    name: "Assam",
    literacy: 72.2,
  },
  {
    stateId: 4,
    name: "Bihar",
    literacy: 61.8,
  },
  {
    stateId: 5,
    name: "Chhattisgarh",
    literacy: 70.3,
  },
  {
    stateId: 6,
    name: "Goa ",
    literacy: 88.7,
  },
  {
    stateId: 7,
    name: "Gujarat",
    literacy: 78,
  },
  {
    stateId: 8,
    name: "Haryana",
    literacy: 75.6,
  },
  {
    stateId: 9,
    name: "Himachal Pradesh",
    literacy: 82.8,
  },
  {
    stateId: 10,
    name: "Jammu & Kashmir",
    literacy: 67.2,
  },
  {
    stateId: 11,
    name: "Jharkhand",
    literacy: 66.4,
  },
  {
    stateId: 12,
    name: "Karnataka",
    literacy: 75.4,
  },
  {
    stateId: 13,
    name: "Kerala",
    literacy: 94,
  },
  {
    stateId: 14,
    name: "Madhya Pradesh",
    literacy: 69.3,
  },
  {
    stateId: 15,
    name: "Maharashtra",
    literacy: 82.3,
  },
  {
    stateId: 16,
    name: "Manipur",
    literacy: 76.9,
  },
  {
    stateId: 17,
    name: "Meghalaya",
    literacy: 74.4,
  },
  {
    stateId: 18,
    name: "Mizoram",
    literacy: 91.3,
  },
  {
    stateId: 19,
    name: "Nagaland",
    literacy: 79.6,
  },
  {
    stateId: 29,
    name: "New Delhi",
    literacy: 86.2,
  },
  {
    stateId: 20,
    name: "Odisha",
    literacy: 72.9,
  },
  {
    stateId: 21,
    name: "Punjab",
    literacy: 75.8,
  },
  {
    stateId: 22,
    name: "Rajasthan",
    literacy: 66.1,
  },
  {
    stateId: 23,
    name: "Sikkim",
    literacy: 81.4,
  },
  {
    stateId: 24,
    name: "Tamil Nadu",
    literacy: 80.1,
  },
  {
    stateId: 30,
    name: "Telangana",
    literacy: 66.54,
  },
  {
    stateId: 25,
    name: "Tripura",
    literacy: 87.2,
  },
  {
    stateId: 26,
    name: "Uttar Pradesh",
    literacy: 67.7,
  },
  {
    stateId: 27,
    name: "Uttarakhand",
    literacy: 78.8,
  },
  {
    stateId: 28,
    name: "West Bengal",
    literacy: 76.3,
  },
];
