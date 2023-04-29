import {
  colors,
  Grid,
  Paper,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import CanvasJSReact from "../../canvasPackage/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Responsiveness = () => {
  

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
            Responsiveness Test | Canvas
          </Typography>
        </Box>
        <Grid container spacing={2} height='85vh'>
          <Grid item xs={12} lg={12} height={'70%'}>
          <CanvasJSChart options={options} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Responsiveness;

const options = {
  theme:'light2',
  animationEnabled: true,
 
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