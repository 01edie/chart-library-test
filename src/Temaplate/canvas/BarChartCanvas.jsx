import { colors, Grid, Paper, Box, Typography, Stack } from "@mui/material";
import CanvasJSReact from "../../canvasPackage/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const BarChartCanvas = () => {
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
            Bar Chart | Canvas
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

export default BarChartCanvas;


const options1 = {
  theme:'light2',
  animationEnabled: true,
  title: {
    text: "Basic Column Chart"
  },
  data: [
  {
    // Change type to "doughnut", "line", "splineArea", etc.
    type: "column",
    dataPoints: [
      { label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }
    ]
  }
  ]
}





const options2 = {
  theme:'light1',
  animationEnabled: true,
  title: {
    text: "Operating Expenses of ACME",
    fontFamily: "verdana"
  },
  axisY: {
    title: "in Eur",
    includeZero: true,
    prefix: "€",
    suffix: "k"
  },
  toolTip: {
    shared: true,
    reversed: true
  },
  legend: {
    verticalAlign: "center",
    horizontalAlign: "right",
    reversed: true,
    cursor: "pointer",
    // itemclick: this.toggleDataSeries
  },
  data: [
  {
    type: "stackedColumn",
    name: "General",
    showInLegend: true,
    yValueFormatString: "#,###k",
    dataPoints: [
      { label: "Jan", y: 14 },
      { label: "Feb", y: 12 },
      { label: "Mar", y: 14 },
      { label: "Apr", y: 13 },
      { label: "May", y: 13 },
      { label: "Jun", y: 13 },
      { label: "Jul", y: 14 },
      { label: "Aug", y: 14 },
      { label: "Sept", y: 13 },
      { label: "Oct", y: 14 },
      { label: "Nov", y: 14 },
      { label: "Dec", y: 14 }
    ]
  },
  {
    type: "stackedColumn",
    name: "Marketing",
    showInLegend: true,
    yValueFormatString: "#,###k",
    dataPoints: [
      { label: "Jan", y: 13 },
      { label: "Feb", y: 13 },
      { label: "Mar", y: 15 },
      { label: "Apr", y: 16 },
      { label: "May", y: 17 },
      { label: "Jun", y: 17 },
      { label: "Jul", y: 18 },
      { label: "Aug", y: 18 },
      { label: "Sept", y: 17 },
      { label: "Oct", y: 18 },
      { label: "Nov", y: 18 },
      { label: "Dec", y: 18 }
    ]
  },
  {
    type: "stackedColumn",
    name: "Sales",
    showInLegend: true,
    yValueFormatString: "#,###k",
    dataPoints: [
      { label: "Jan", y: 13 },
      { label: "Feb", y: 13 },
      { label: "Mar", y: 15 },
      { label: "Apr", y: 15 },
      { label: "May", y: 15 },
      { label: "Jun", y: 15 },
      { label: "Jul", y: 16 },
      { label: "Aug", y: 17 },
      { label: "Sept", y: 17 },
      { label: "Oct", y: 18 },
      { label: "Nov", y: 19 },
      { label: "Dec", y: 20 },
  ]
  },
  {
    type: "stackedColumn",
    name: "IT",
    showInLegend: true,
    yValueFormatString: "#,###k",
    dataPoints: [
      { label: "Jan", y: 14 },
      { label: "Feb", y: 8 },
      { label: "Mar", y: 6 },
      { label: "Apr", y: 6 },
      { label: "May", y: 5 },
      { label: "Jun", y: 5 },
      { label: "Jul", y: 6 },
      { label: "Aug", y: 3 },
      { label: "Sept", y: 9 },
      { label: "Oct", y: 5 },
      { label: "Nov", y: 8 },
      { label: "Dec", y: 2 },
    ]
  }]
}
