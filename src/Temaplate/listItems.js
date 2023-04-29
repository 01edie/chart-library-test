import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MapIcon from '@mui/icons-material/Map';

import TimelineIcon from '@mui/icons-material/Timeline';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { List, Divider } from '@mui/material';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const MenuItems =({setPage})=>{


  const mainListItems = (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Recharts.js
      </ListSubheader>
      <ListItemButton onClick={()=>setPage({a:true})}> 
        <ListItemIcon>
          <TimelineIcon/>
        </ListItemIcon>
        <ListItemText primary="Single Line Graph" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({b:true})}>
        <ListItemIcon>
          <SsidChartIcon />
        </ListItemIcon>
        <ListItemText primary="Double Line Graph" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({c:true})}>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Pie Chart" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({d:true})}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Bar Chart" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({e:true})}>
        <ListItemIcon>
          <StackedBarChartIcon/>
        </ListItemIcon>
        <ListItemText primary="Drill Down" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({f:true})}>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Responsiveness" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({exr:true})}>
        <ListItemIcon>
          <FileDownloadIcon/>
        </ListItemIcon>
        <ListItemText primary="Export" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({sr:true})}>
        <ListItemIcon>
          <MapIcon/>
        </ListItemIcon>
        <ListItemText primary="States" />
      </ListItemButton>
    </React.Fragment>
  );
  
   const secondaryListItems = (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Canvas.js
      </ListSubheader>
      <ListItemButton onClick={()=>setPage({g:true})}> 
        <ListItemIcon>
          <TimelineIcon/>
        </ListItemIcon>
        <ListItemText primary="Single Line Graph" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({h:true})}>
        <ListItemIcon>
          <SsidChartIcon />
        </ListItemIcon>
        <ListItemText primary="Double Line Graph" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({i:true})}>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Pie Chart" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({j:true})}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Bar Chart" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({k:true})}>
        <ListItemIcon>
          <StackedBarChartIcon/>
        </ListItemIcon>
        <ListItemText primary="Drill Down" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({l:true})}>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Responsiveness" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({exc:true})}>
        <ListItemIcon>
          <FileDownloadIcon/>
        </ListItemIcon>
        <ListItemText primary="Export" />
      </ListItemButton>
      <ListItemButton onClick={()=>setPage({sc:true})}>
        <ListItemIcon>
          <MapIcon/>
        </ListItemIcon>
        <ListItemText primary="States" />
      </ListItemButton>
    </React.Fragment>
  );

  return(
    <List component="nav">
    {mainListItems}
    <Divider sx={{ my: 1 }} />
    {secondaryListItems}
  </List>
  )
}



export default MenuItems
