import React from 'react';

// Import material UI components
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function Input({handleData}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <p>Enter an email:</p>
        <TextField
          required
          id="email"
          label="Enter your email"
          variant="outlined"
          onChange={handleData}
        />
        <p>Enter a password:</p>
        <TextField
          required
          id="password"
          label="Enter your password"
          variant="outlined"
          type="password" 
          onChange={handleData}
        />
        <p>First Name:</p>
        <TextField
          required
          id="first_name"
          label="Enter your last name"
          variant="outlined"
          onChange={handleData}
        />
        <p>Last Name:</p>
        <TextField
          required
          id="last_name"
          label="Enter your first name"
          variant="outlined"
          onChange={handleData}
        />
        <p>Zip Code:</p>
        <TextField
          required
          id="zipCode"
          label="Zip Code"
          variant="outlined"
          onChange={handleData}
        />
      </div>
    </form>
  );
}