import { Grid, Paper, Box, Typography, Stack, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { blue } from "@mui/material/colors";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import domtoimage from "dom-to-image";

const ExportTest = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue] = useState(["PDF", "PNG", "JPG"]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    console.log(value);
    if (value === "PDF") {
      const doc = new jsPDF("landscape");
      htmlToImage
        .toJpeg(document.getElementById("testChart1"))
        .then(function (dataUrl) {
          doc.addImage(dataUrl, "JPG", 2, 50);
          doc.save("Test.pdf");
        });
    }
    if (value === "PNG") {
      domtoimage
        .toPng(document.getElementById("testChart1"))
        .then((res) => download(res));
      // download("s", "test.xlsx");
    }
    if (value === "JPG") {
      htmlToImage
        .toJpeg(document.getElementById("testChart1"))
        .then(function (dataUrl) {
          download(dataUrl, "test.jpg");
        });
    }
  };
  return (
    <Grid item xs={12} md={8} lg={9} bgcolor="#fff" borderRadius={1}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          // height: "70vh",
          paddingBottom: 2,
        }}
      >
        <Box marginBottom={2}>
          <Typography textAlign="center" variant="h6">
            Exports | Recharts
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Stack alignItems="end">
              <Button
                size="small"
                onClick={handleClickOpen}
                variant="contained"
              >
                Export
              </Button>
            </Stack>
            <Box id="testChart1" bgcolor="#fff" p={3} height={"50vh"}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  id="testChart2"
                  width={450}
                  height={250}
                  data={data}
                  margin={{ top: 10, right: 30, left: 30, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name">
                    <Label
                      value="Yearly Sales of Vivel"
                      offset={-10}
                      position="insideBottom"
                    />
                  </XAxis>
                  <YAxis>
                    <Label
                      value="Values in INR"
                      stroke="#1976d2"
                      fontFamily="roboto"
                      fontSize={18}
                      offset={-10}
                      angle={-90}
                      position="insideLeft"
                    />
                  </YAxis>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Vivel"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <Typography color="#8884d8" textAlign="center">
                Vivel
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </Paper>
    </Grid>
  );
};

export default ExportTest;

const types = ["PDF", "PNG", "JPG"];
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose Type</DialogTitle>
      <List sx={{ pt: 0, minWidth: "250px" }}>
        {types.map((type) => (
          <ListItem disableGutters key={type}>
            <ListItemButton onClick={() => handleListItemClick(type)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PictureAsPdfIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={type} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

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
