import "./OpenData.css"
import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkIcon from '@mui/icons-material/Link';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import reactStringReplace from 'react-string-replace';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const replaceHttpText = text => {
  return reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
    <a key={match + i} href={match}>{match}</a>
  ));
}


function OpenData(props) {
  const { Name, Description, Documentation, Contact, ManagedBy, UpdateFrequency, Tags, License, Resources, DataAtWork } = props;
  console.log(replaceHttpText(ManagedBy));
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

     return (
      <Card className="card" >
        <CardContent>
          <Typography variant="headline" component="h2">
            {Name}
          </Typography>
          {Description !== '' &&
            <Typography color="subtitle1" align="left" >
              {Description}
            </Typography>
          }
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" color="subtitle2" align="left" >
            Documantation:
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
             {Documentation}
          </Typography>
          <br />
          <Typography variant="h6" color="subtitle2" align="left" >
            License: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {License}
          </Typography>
          <br />
          <Typography variant="h6" color="subtitle2" align="left" >
            ManagedBy: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {ManagedBy}
          </Typography>
          <br />
          <Typography variant="h6" color="subtitle2" align="left" >
            UpdateFrequency: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {UpdateFrequency}
          </Typography>
          <br />
          <Typography variant="h6" color="subtitle2" align="left" >
            Tags: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {Tags}
          </Typography>
          <Typography variant="h6" color="subtitle2" align="left" >
            Contact: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {Contact}
          </Typography>
        </CardContent>
        </Collapse>
      </Card>
    );
  }

export default OpenData;