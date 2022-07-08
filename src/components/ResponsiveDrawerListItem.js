import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Route関連
import { Link } from 'react-router-dom'

const ResponsiveDrawerListItem = ({to, icon, text}) => (
  <ListItem button component={Link} to={to} >
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

ResponsiveDrawerListItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default ResponsiveDrawerListItem;