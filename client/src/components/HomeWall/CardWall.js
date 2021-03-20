import React from 'react';

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles((theme) => ({
  root: {
    Width: 600,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function CardWall({soapboxes}) {
  console.log("soapboxwall", soapboxes)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const card = soapboxes.length
  ? soapboxes.map(soapbox => {
    console.log("soapboxmap", soapbox)
    return(
       <Card container spacing={4} className={classes.root}>
    
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AccountBalanceIcon />
          </IconButton>
        }
        title={soapbox.subject}
        subheader={soapbox.category}
      />
      <CardMedia
        className={classes.media}
        image="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {soapbox.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ThumbDownIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary">Latifah L.</Typography>
          <Typography paragraph>
            I completely support this initiative!
          </Typography>
          <Typography variant="body2" color="textSecondary">Peter O.</Typography>
          <Typography paragraph>
            Let's help the community together!
          </Typography>
        </CardContent>
      </Collapse>
    </Card> 
    )
    
  }) 
  : console.log("soapboxerrormap")
    
    // <div> 
      {/* {soapbox.description} */}
    
    {/* </div> */}


  return (
    <div>
      {card}
    </div>
  );
}
