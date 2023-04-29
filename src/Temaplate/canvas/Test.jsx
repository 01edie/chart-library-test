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
import CanvasJSReact from "../../canvasPackage/canvasjs.react";

import $ from 'jquery'

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChartDrillCanvas = () => {
  function visitorsChartDrilldownHandler({ dataPointIndex }) {
    setDrilled(true);
    if (dataPointIndex === 0) {
      setDynamicData(newVisitors);
    }
    if (dataPointIndex === 1) {
      setDynamicData(returningVisitors);
    }
  }

  const rootData = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "New VS Returning Visitors",
    },
    subtitles: [
      {
        text: "Click on Any Segment to Drilldown",
        backgroundColor: "#2eacd1",
        fontSize: 16,
        fontColor: "white",
        padding: 5,
      },
    ],
    legend: {
      fontFamily: "calibri",
      fontSize: 14,
      itemTextFormatter: function (e) {
        return (
          e.dataPoint.name +
          ": " +
          Math.round((e.dataPoint.y / totalVisitors) * 100) +
          "%"
        );
      },
    },
    data: [
      {
        click: visitorsChartDrilldownHandler,
        cursor: "pointer",
        explodeOnClick: false,
        innerRadius: "75%",
        legendMarkerType: "square",
        name: "New vs Returning Visitors",
        radius: "100%",
        showInLegend: true,
        startAngle: 90,
        type: "doughnut",
        dataPoints: [
          { y: 519960, name: "New Visitors", color: "#E7823A" },
          { y: 363040, name: "Returning Visitors", color: "#546BC1" },
        ],
      },
    ],
  };
  const [dynamicData, setDynamicData] = useState(rootData);
  const [drilled, setDrilled] = useState(false);
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
            Bar Chart Drill Down | Canvas
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Stack alignItems="end">
              <Button
                sx={{ visibility: drilled ? "visible" : "hidden" }}
                onClick={() => {
                  setDrilled(false);
                  setDynamicData(rootData);
                }}
                variant="contained"
              >
                Back
              </Button>
            </Stack>
            <CanvasJSChart id="chartContainer" options={dynamicData} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BarChartDrillCanvas;

const totalVisitors = 883000;

const newVisitors = {
  animationEnabled: true,
  theme: "light2",
  title: {
    text: "New Visitors",
    fontSize: 18,
    fontWeight: 600,
  },
  axisX: {
    labelFontColor: "#717171",
    lineColor: "#a2a2a2",
    tickColor: "#a2a2a2",
  },
  axisY: {
    gridThickness: 0,
    includeZero: false,
    labelFontColor: "#717171",
    lineColor: "#a2a2a2",
    tickColor: "#a2a2a2",
    lineThickness: 1,
  },
  data: [
    {
      color: "#E7823A",
      name: "New Visitors",

      type: "column",
      dataPoints: [
        { x: new Date("1 Jan 2015"), y: 33000 },
        { x: new Date("1 Feb 2015"), y: 35960 },
        { x: new Date("1 Mar 2015"), y: 42160 },
        { x: new Date("1 Apr 2015"), y: 42240 },
        { x: new Date("1 May 2015"), y: 43200 },
        { x: new Date("1 Jun 2015"), y: 40600 },
        { x: new Date("1 Jul 2015"), y: 42560 },
        { x: new Date("1 Aug 2015"), y: 44280 },
        { x: new Date("1 Sep 2015"), y: 44800 },
        { x: new Date("1 Oct 2015"), y: 48720 },
        { x: new Date("1 Nov 2015"), y: 50840 },
        { x: new Date("1 Dec 2015"), y: 51600 },
      ],
    },
  ],
};

const returningVisitors = {
  animationEnabled: true,
  theme: "light2",
  title: {
    text: "Returning Visitors",
    fontSize: 18,
    fontWeight: 600,
  },
  axisX: {
    labelFontColor: "#717171",
    lineColor: "#a2a2a2",
    tickColor: "#a2a2a2",
  },
  axisY: {
    gridThickness: 0,
    includeZero: false,
    labelFontColor: "#717171",
    lineColor: "#a2a2a2",
    tickColor: "#a2a2a2",
    lineThickness: 1,
  },
  data: [
    {
      color: "#546BC1",
      name: "Returning Visitors",
      type: "column",
      dataPoints: [
        { x: new Date("1 Jan 2015"), y: 22000 },
        { x: new Date("1 Feb 2015"), y: 26040 },
        { x: new Date("1 Mar 2015"), y: 25840 },
        { x: new Date("1 Apr 2015"), y: 23760 },
        { x: new Date("1 May 2015"), y: 28800 },
        { x: new Date("1 Jun 2015"), y: 29400 },
        { x: new Date("1 Jul 2015"), y: 33440 },
        { x: new Date("1 Aug 2015"), y: 37720 },
        { x: new Date("1 Sep 2015"), y: 35200 },
        { x: new Date("1 Oct 2015"), y: 35280 },
        { x: new Date("1 Nov 2015"), y: 31160 },
        { x: new Date("1 Dec 2015"), y: 34400 },
      ],
    },
  ],
};


