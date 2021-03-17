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

export function Input(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={4}>
        <Grid item sm={12} align="center">
          <div>
            <p>Enter an email:</p>
              <TextField
                required
                id="register-input-email"
                label="Enter your email"
                variant="outlined"
              />

              <p>Enter a password:</p>
              <TextField
                required
                id="register-input-password"
                label="Enter your password"
                variant="outlined"
              />

              <p>First Name:</p>
              <TextField
                required
                id="register-input-first-name"
                label="Enter your last name"
                variant="outlined"
              />

              <p>Last Name:</p>
              <TextField
                required
                id="register-input-last-name"
                label="Enter your first name"
                variant="outlined"
              />

              <p>Zip Code:</p>
              <TextField
                required
                id="register-input-zip"
                label="Zip Code"
                variant="outlined"
              />
            </div>
          </Grid>
      </Grid>
    </form>
  );
}