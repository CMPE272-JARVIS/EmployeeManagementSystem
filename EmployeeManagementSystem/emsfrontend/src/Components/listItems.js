import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';

import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/employees" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItem>
    </Link>
    <Link to="/hr" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="HR" />
      </ListItem>
    </Link>
    <Link to="/manager" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Manager" />
      </ListItem>
    </Link>
  </div>
);
