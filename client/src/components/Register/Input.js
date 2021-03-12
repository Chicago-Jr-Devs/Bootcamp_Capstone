import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function Input(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      
      <div>
          <p>Enter an email:</p>
        <TextField
          required
          id="outlined-required"
          defaultValue="Enter your email"
          variant="outlined"
        />
        <p>Enter a password:</p>
        <TextField
          required
          id="outlined-required"
          defaultValue="Enter your password"
          variant="outlined"
        />
        <p>Last Name:</p>
        <TextField
          required
          id="outlined-required"
          defaultValue="Enter your first name"
          variant="outlined"
        />
        <p>First Name:</p>
        <TextField
          required
          id="outlined-required"
          defaultValue="Enter your last name"
          variant="outlined"
        />
        <p>Zip Code:</p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Zip Code"
          variant="outlined"
        />
       
        
      </div>
    </form>
  );
}