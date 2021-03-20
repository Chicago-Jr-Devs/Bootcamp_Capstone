import React from 'react';
import { useHistory } from "react-router-dom"
// import { useHistory } from "react-router-dom";
// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Login from '../../pages/Login' 
import Register from '../../pages/Register' 


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export function FormBtn() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/register`; 
    history.push(path);
  }

  const homeChange = () =>{ 
    let path = `/home`; 
    history.push(path);
  }
  

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={homeChange}>
          Sign in
        </Button>
  
        <Button variant="outlined" color="primary" onClick={routeChange}>
          Register
        </Button>
      
      </div>
      
  );
}