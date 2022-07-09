import "./OpenData.css"
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

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



function OpenData(props) {
  const { Name, Description, Documentation, Contact, ManagedBy, UpdateFrequency, Tags, License, Resources, DataAtWork } = props;
  
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
        <Collapse className="collapse" in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="collapse">
          <Typography variant="h6" color="subtitle2" align="left" >
            Documantation:
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
          <a href={Documentation}>{Documentation}</a>
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
          <br />
          <Typography variant="h6" color="subtitle2" align="left" >
            Contact: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {Contact}
          </Typography>
          <br />
          <Typography variant="h6" color="subtitle2" align="left" >
            Resources: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {Resources}
          </Typography>
          <br />
          <Typography variant="h6" color="subtitle2" align="left" >
            DataAtWork: 
          </Typography>
          <Typography variant="body1" color="body1" align="left" >
            {DataAtWork}
          </Typography>
        </CardContent>
        </Collapse>
      </Card>
    );
  }

export default OpenData;