import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Route関連
import { Link } from 'react-router-dom'

const ResponsiveDrawerListItem = ({to, onClick, icon, text}) => (
  <ListItem button component={Link} to={to} onClick={onClick} >
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

ResponsiveDrawerListItem.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default ResponsiveDrawerListItem;