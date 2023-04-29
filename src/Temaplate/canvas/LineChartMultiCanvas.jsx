import { colors, Grid, Paper, Box, Typography, Stack } from "@mui/material";
import CanvasJSReact from "../../canvasPackage/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const LineChartMultiCanvas = () => {
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
            Multi Line Chart | Canvas
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <CanvasJSChart options={options1} />
          </Grid>
          <Grid item xs={12} lg={6}>
          <CanvasJSChart options={options2} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LineChartMultiCanvas;






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

const options1 = {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "Test Monthly Sales",
    fontSize:16,
    fontWeight:400
  },
  axisX: {
    valueFormatString: "MMM",
    title: "Yearly",
  },
  axisY: {
    title: "Sales (in INR)",
    prefix: "₹"
  },
  data: [{
    yValueFormatString: "$#,###",
    xValueFormatString: "MMMM",
    type: "spline",
    dataPoints: [
      { x: new Date(2017, 0), y: 25060 },
      { x: new Date(2017, 1), y: 27980 },
      { x: new Date(2017, 2), y: 42800 },
      { x: new Date(2017, 3), y: 32400 },
      { x: new Date(2017, 4), y: 35260 },
      { x: new Date(2017, 5), y: 33900 },
      { x: new Date(2017, 6), y: 40000 },
      { x: new Date(2017, 7), y: 52500 },
      { x: new Date(2017, 8), y: 32300 },
      { x: new Date(2017, 9), y: 42000 },
      { x: new Date(2017, 10), y: 37160 },
      { x: new Date(2017, 11), y: 38400 }
    ]
  },{
    yValueFormatString: "$#,###",
    xValueFormatString: "MMMM",
    type: "spline",
    dataPoints: [
      { x: new Date(2017, 0), y: 25400 },
      { x: new Date(2017, 1), y: 22100 },
      { x: new Date(2017, 2), y: 35800 },
      { x: new Date(2017, 3), y: 39200 },
      { x: new Date(2017, 4), y: 36260 },
      { x: new Date(2017, 5), y: 29900 },
      { x: new Date(2017, 6), y: 35500 },
      { x: new Date(2017, 7), y: 45500 },
      { x: new Date(2017, 8), y: 28500 },
      { x: new Date(2017, 9), y: 37000 },
      { x: new Date(2017, 10), y: 31160 },
      { x: new Date(2017, 11), y: 39400 }
    ]
  }
]
}
const options2 = {
  theme: "light2",
  animationEnabled: true,
  title: {
    text: "Test Monthly Sales",
    fontSize:16,
    fontWeight:400
  },
  subtitles: [{
    text: "Test Subtitle"
  }],
  axisY: {
    prefix: "₹"
  },
  toolTip: {
    shared: true
  },
  data: [
  {
    type: "area",
    name: "Data1",
    showInLegend: true,
    xValueFormatString: "MMM YYYY",
    yValueFormatString: "₹#,##0.##",
    dataPoints: [
      { x: new Date(2017, 0), y: 25060 },
      { x: new Date(2017, 1), y: 27980 },
      { x: new Date(2017, 2), y: 42800 },
      { x: new Date(2017, 3), y: 32400 },
      { x: new Date(2017, 4), y: 35260 },
      { x: new Date(2017, 5), y: 33900 },
      { x: new Date(2017, 6), y: 40000 },
      { x: new Date(2017, 7), y: 52500 },
      { x: new Date(2017, 8), y: 32300 },
      { x: new Date(2017, 9), y: 42000 },
      { x: new Date(2017, 10), y: 37160 },
      { x: new Date(2017, 11), y: 38400 }
    ]
  },
  {
    type: "area",
    name: "data2",
    showInLegend: true,
    xValueFormatString: "MMM YYYY",
    yValueFormatString: "₹#,##0.##",
    dataPoints: [
      { x: new Date(2017, 0), y: 25400 },
      { x: new Date(2017, 1), y: 22100 },
      { x: new Date(2017, 2), y: 35800 },
      { x: new Date(2017, 3), y: 39200 },
      { x: new Date(2017, 4), y: 36260 },
      { x: new Date(2017, 5), y: 29900 },
      { x: new Date(2017, 6), y: 35500 },
      { x: new Date(2017, 7), y: 45500 },
      { x: new Date(2017, 8), y: 28500 },
      { x: new Date(2017, 9), y: 37000 },
      { x: new Date(2017, 10), y: 31160 },
      { x: new Date(2017, 11), y: 39400 }
    ]
  }
  ]
}

