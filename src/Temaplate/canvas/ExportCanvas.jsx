import { colors, Grid, Paper, Box, Typography, Stack } from "@mui/material";
import CanvasJSReact from "../../canvasPackage/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const ExportCanvas = () => {
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
            Exports | Canvas
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

export default ExportCanvas;


const options1 = {
  animationEnabled: true,
  exportEnabled:true,
  theme:'light2',
  title:{
    text: "Monthly Sales - 2017",
    fontSize:16,
    fontWeight:300
  },
  axisX: {
    valueFormatString: "MMM"
  },
  axisY: {
    title: "Sales (in USD)",
    prefix: "$"
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
  }]
}
const options2 = {
  animationEnabled: true,
  exportEnabled:true,
  theme:'light2',
  title:{
    text: "Monthly Sales - 2017",
    fontSize:16,
    fontWeight:400
  },
  axisX: {
    valueFormatString: "MMM"
  },
  axisY: {
    title: "Sales (in USD)",
    prefix: "$"
  },
  data: [{
    yValueFormatString: "$#,###",
    xValueFormatString: "MMMM",
    type: "splineArea",
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
  }]
}

