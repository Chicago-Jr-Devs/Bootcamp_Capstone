// import React from 'react';

// export function Input() {
//   return (
//     <form>
//       <input id="login-email" label="Email"></input>
//       <input id="login-password" label="Password" type="password"></input>
//     </form>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function Input() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="login-form-email" label="Email" variant="outlined" />
      <TextField id="login-form-password" label="Password" type="password" variant="outlined" />
    </form>
  );
}
