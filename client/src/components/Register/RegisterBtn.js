import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  }
}));

export function RegisterBtn({submitUser}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={submitUser} variant="contained" color="primary">
        Create An Account
      </Button>
    </div>
  );
}
