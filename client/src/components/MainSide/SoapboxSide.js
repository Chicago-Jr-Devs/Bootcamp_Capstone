import React from "react"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export function SoapboxSide(props){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12}>
                    <div>
                        <h3>Create a Soapbox</h3>
                        <p>Voice your issue and get your community to engage a conversation with you.</p>
                        <Button variant="contained" color="primary">
                            Get my Soapbox!
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}