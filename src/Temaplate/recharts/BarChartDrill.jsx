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
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const BarChartDrill = () => {
  const [chartData, setChartData] = useState(data);
  //   const [chartParams, setChartParams] = useState(dataParams);
  const [drilled, setDrilled] = useState(false);
  const [key, setKey] = useState(dataKey);
  const tmpTotal = data.reduce((a, e) => a + e[dataKey], 0);
  const [total, setTotal] = useState(tmpTotal);
  const [timeline, setTimeline] = useState("Jan to Jul, 2023");

  const drillHandler = (data) => {
    if (!data.drill) {
      return;
    }
    console.log(data);
    const tmpData = subData[data.brand][data.month];
    const tmpKey = subData[data.brand].key;
    // const tmpDataParams = tmpData.map((e) => ({ key: e.name, drill: false }));
    console.log(tmpData);
    setChartData(tmpData);
    setKey(tmpKey);
    setTotal(tmpData.reduce((a, e) => a + e[tmpKey], 0));
    // console.log(tmpDataParams);
    // setChartParams(tmpDataParams);
    setDrilled(true);
    setTimeline(`${data.month}, 2023`);
  };

  const backHandler = () => {
    setChartData(data);
    setKey(dataKey);
    setDrilled(false);
    setTotal(tmpTotal);
    setTimeline("Jan to Jul, 2023");
  };
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
            Bar Chart Drill Down | Recharts
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Stack justifyContent="end" position="relative" direction="row">
              <Typography
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                Sales of {timeline}
              </Typography>
              <Button
                variant="contained"
                style={{ visibility: drilled ? "visible" : "hidden" }}
                onClick={backHandler}
              >
                Back
              </Button>
            </Stack>
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"></XAxis>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey={key}
                //   key={e.key}
                fill="#8884d8"
                onClick={drillHandler}
                //   onClick={e.drill ? drillHandler : null}
              />
              {/* {chartParams.map((e) =>{
                console.log(e.drill)
                return(
                    <Bar
                  dataKey='Vivel'
                  key={e.key}
                  fill="#8884d8"
                  onClick={e.drill ? drillHandler : null}
                />
                )
              })} */}
            </BarChart>
            <Stack
              direction="row"
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: colors.green[500],
                  borderRadius: "2px",
                }}
              ></div>
              <Typography color={colors.green[500]} textAlign="center">
                Total: {total}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BarChartDrill;

const data = [
  {
    name: "Jan",
    Vivel: 2400,
    brand: "vivel",
    month: "jan",
    drill: true,
  },
  {
    name: "Feb",
    Vivel: 1398,
    brand: "vivel",
    month: "feb",
    drill: true,
  },
  {
    name: "Mar",
    Vivel: 9800,
    brand: "vivel",
    month: "mar",
    drill: true,
  },
  {
    name: "Apr",
    Vivel: 3908,
    brand: "vivel",
    month: "apr",
    drill: true,
  },
  {
    name: "May",
    Vivel: 4800,
    brand: "vivel",
    month: "may",
    drill: true,
  },
  {
    name: "Jun",
    Vivel: 3800,
    brand: "vivel",
    month: "jun",
    drill: true,
  },
  {
    name: "Jul",
    Vivel: 4300,
    brand: "vivel",
    month: "jul",
    drill: true,
  },
];

const subData = {
  vivel: {
    key: "Sales",
    jan: [
      {
        name: "Body Wash",
        Sales: 350,
        drill: false,
      },
      {
        name: "Face Wash",
        Sales: 500,
        drill: false,
      },
      {
        name: "Cream",
        Sales: 450,
        drill: false,
      },
      {
        name: "Soap",
        Sales: 700,
        drill: false,
      },
      {
        name: "Body Lotion",
        Sales: 300,
        drill: false,
      },
      {
        name: "Moisturizer",
        Sales: 100,
        drill: false,
      },
    ],
    feb: [
      {
        name: "Body Wash",
        Sales: 230,
        drill: false,
      },
      {
        name: "Face Wash",
        Sales: 260,
        drill: false,
      },
      {
        name: "Cream",
        Sales: 120,
        drill: false,
      },
      {
        name: "Soap",
        Sales: 350,
        drill: false,
      },
      {
        name: "Body Lotion",
        Sales: 200,
        drill: false,
      },
      {
        name: "Moisturizer",
        Sales: 238,
        drill: false,
      },
    ],
    mar: [
      {
        name: "Body Wash",
        Sales: 1200,
        drill: false,
      },
      {
        name: "Face Wash",
        Sales: 1900,
        drill: false,
      },
      {
        name: "Cream",
        Sales: 1450,
        drill: false,
      },
      {
        name: "Soap",
        Sales: 2700,
        drill: false,
      },
      {
        name: "Body Lotion",
        Sales: 1550,
        drill: false,
      },
      {
        name: "Moisturizer",
        Sales: 1000,
        drill: false,
      },
    ],
    apr: [
      {
        name: "Body Wash",
        Sales: 550,
        drill: false,
      },
      {
        name: "Face Wash",
        Sales: 650,
        drill: false,
      },
      {
        name: "Cream",
        Sales: 658,
        drill: false,
      },
      {
        name: "Soap",
        Sales: 700,
        drill: false,
      },
      {
        name: "Body Lotion",
        Sales: 900,
        drill: false,
      },
      {
        name: "Moisturizer",
        Sales: 450,
        drill: false,
      },
    ],
    may: [
      {
        name: "Body Wash",
        Sales: 750,
        drill: false,
      },
      {
        name: "Face Wash",
        Sales: 950,
        drill: false,
      },
      {
        name: "Cream",
        Sales: 600,
        drill: false,
      },
      {
        name: "Soap",
        Sales: 1200,
        drill: false,
      },
      {
        name: "Body Lotion",
        Sales: 700,
        drill: false,
      },
      {
        name: "Moisturizer",
        Sales: 600,
        drill: false,
      },
    ],
    jun: [
      {
        name: "Body Wash",
        Sales: 500,
        drill: false,
      },
      {
        name: "Face Wash",
        Sales: 700,
        drill: false,
      },
      {
        name: "Cream",
        Sales: 500,
        drill: false,
      },
      {
        name: "Soap",
        Sales: 1100,
        drill: false,
      },
      {
        name: "Body Lotion",
        Sales: 600,
        drill: false,
      },
      {
        name: "Moisturizer",
        Sales: 400,
        drill: false,
      },
    ],
    jul: [
      {
        name: "Body Wash",
        Sales: 600,
        drill: false,
      },
      {
        name: "Face Wash",
        Sales: 700,
        drill: false,
      },
      {
        name: "Cream",
        Sales: 600,
        drill: false,
      },
      {
        name: "Soap",
        Sales: 1200,
        drill: false,
      },
      {
        name: "Body Lotion",
        Sales: 700,
        drill: false,
      },
      {
        name: "Moisturizer",
        Sales: 500,
        drill: false,
      },
    ],
  },
};

// const dataParams = [{ key: "Vivel", drill: true }];
const dataKey = "Vivel";
