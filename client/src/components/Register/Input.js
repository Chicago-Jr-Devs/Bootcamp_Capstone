import React from 'react';

// Import material UI components
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '0px',
      width: '35ch',
    },
  },
}));

export function Input({handleData}) {
  const classes = useStyles();

  return (
    <form className={classes.root} style={{marginTop: 40}} noValidate autoComplete="off">
      <div>
        <p className="bold" style={{fontSize: "0.8em"}}>ENTER YOUR EMAIL</p>
        <TextField
          required
          id="email"
          label="Enter your email"
          variant="outlined"
          onChange={handleData}
        />
        <p className="bold" style={{fontSize: "0.8em"}}>ENTER YOUR PASSWORD</p>
        <TextField
          required
          id="password"
          label="Enter your password"
          variant="outlined"
          type="password" 
          onChange={handleData}
        />
        <p className="bold" style={{fontSize: "0.8em"}}>FIRST NAME</p>
        <TextField
          required
          id="first_name"
          label="Enter your last name"
          variant="outlined"
          onChange={handleData}
        />
        <p className="bold" style={{fontSize: "0.8em"}}>LAST NAME</p>
        <TextField
          required
          id="last_name"
          label="Enter your first name"
          variant="outlined"
          onChange={handleData}
        />
        <p className="bold" style={{fontSize: "0.8em"}}>ZIPCODE</p>
        <TextField
          required
          id="zipcode"
          label="Zip Code"
          variant="outlined"
          onChange={handleData}
        />
      </div>
    </form>
  );
}