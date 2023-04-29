import {
  colors,
  Grid,
  Paper,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
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

const Responsive = () => {
  

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
            Responsiveness Test | Recharts
          </Typography>
        </Box>
        <Grid container spacing={2} height='85vh'>
          <Grid item xs={12} lg={12} height={'70%'}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Responsive;

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
