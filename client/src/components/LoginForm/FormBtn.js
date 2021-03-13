import React from 'react';

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function FormBtn() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          Sign in
        </Button>
        <Button variant="outlined" color="primary">
          Register
        </Button>
      </div>
  );
}