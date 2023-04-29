import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChevronRight } from "@mui/icons-material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItems, { mainListItems, secondaryListItems } from "./listItems";
import { colors } from "@mui/material";

// recharts
import BarChartTest from "./recharts/BarChartTest";
import LineChartSingleTest from "./recharts/LineChartSingleTest";
import LineChartMultiTest from "./recharts/LineChartMultiTest";
import PieChartTest from "./recharts/PieChartTest";
import BarChartDrill from "./recharts/BarChartDrill";
import Responsive from "./recharts/Responsive";
import ExportTest from "./recharts/ExportTest";
import StatesTest from "./recharts/StatesTest";

// canvas
import LineChartSingleCanvas from "./canvas/LineChartSingleCanvas";
import LineChartMultiCanvas from "./canvas/LineChartMultiCanvas";
import BarChartCanvas from "./canvas/BarChartCanvas";
import PieChartCanvas from "./canvas/PieChartCanvas";
import BarChartDrillCanvas from "./canvas/BarChartDrillCanvas";
import Responsiveness from "./canvas/Responsiveness";
import ExportCanvas from "./canvas/ExportCanvas";
import StatesCanvas from "./canvas/StatesCanvas";



const mdTheme = createTheme();

function DashboardContent() {
  const [page, setPage] = React.useState({ a: true });
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Charts
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            height: "100vh",
            scrollbarWidth: "20px",
            scrollbarColor: "blue !important",
          }}
          open={open}
        >
          <Box
            sx={{
              position: "fixed",
              zIndex: 5,
              backgroundColor: "#1976d2",
              borderRadius: "4px",
              borderTopLeftRadius: "12px",
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton
                size="small"
                sx={{ color: "#fff" }}
                onClick={toggleDrawer}
              >
                {open?<ChevronLeftIcon />:<MenuIcon />}
              </IconButton>
            </Toolbar>
          </Box>
          <MenuItems setPage={setPage} />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: "100%",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* recharts */}
            {page?.a && <LineChartSingleTest />}
            {page?.b && <LineChartMultiTest />}
            {page?.c && <PieChartTest />}
            {page?.d && <BarChartTest />}
            {page?.e && <BarChartDrill />}
            {page?.f && <Responsive />}
            {page?.exr && <ExportTest />}
            {page?.sr && <StatesTest />}

            {/* canvas */}
            {page?.g && <LineChartSingleCanvas />}
            {page?.h && <LineChartMultiCanvas />}
            {page?.i && <PieChartCanvas />}
            {page?.j && <BarChartCanvas />}
            {page?.k && <BarChartDrillCanvas />}
            {page?.l && <Responsiveness />}
            {page?.exc && <ExportCanvas />}
            {page?.sc && <StatesCanvas />}

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Test( MUI )
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
