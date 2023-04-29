import { colors, Grid, Paper, Box, Typography, Stack } from "@mui/material";
import CanvasJSReact from "../../canvasPackage/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const PieChartCanvas = () => {
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
            Pie Chart | Canvas
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

export default PieChartCanvas;








const options1 = {
  theme: "light2",
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: "Website Traffic Sources"
  },
  data: [{
    type: "pie",
    startAngle: 75,
    toolTipContent: "<b>{label}</b>: {y}%",
    showInLegend: "true",
    legendText: "{label}",
    indexLabelFontSize: 16,
    indexLabel: "{label} - {y}%",
    dataPoints: [
      { y: 18, label: "Direct" },
      { y: 49, label: "Organic Search" },
      { y: 9, label: "Paid Search" },
      { y: 5, label: "Referral" },
      { y: 19, label: "Social" }
    ]
  }]
}
const options2 = {
  theme: "light2",
  animationEnabled: true,
  title: {
    text: "Customer Satisfaction"
  },
  subtitles: [{
    text: "71% Positive",
    verticalAlign: "center",
    fontSize: 24,
    dockInsidePlotArea: true
  }],
  data: [{
    type: "doughnut",
    showInLegend: true,
    indexLabel: "{name}: {y}",
    yValueFormatString: "#,###'%'",
    dataPoints: [
      { name: "Unsatisfied", y: 5 },
      { name: "Very Unsatisfied", y: 31 },
      { name: "Very Satisfied", y: 40 },
      { name: "Satisfied", y: 17 },
      { name: "Neutral", y: 7 }
    ]
  }]
}

