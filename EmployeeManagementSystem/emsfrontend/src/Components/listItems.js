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
    {/* <Link to="/" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link> */}
    <Link to="/employee" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="View Employee" />
      </ListItem>
    </Link>
    <Link to="/department" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Department" />
      </ListItem>
    </Link>
    <Link to="/salaries" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Salary" />
      </ListItem>
    </Link>
    <Link to="/profile" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </ListItem>
    </Link>
    <Link to="/leave" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Leave" />
      </ListItem>
    </Link>
    <Link to="/logout" style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </Link>
  </div>
);
