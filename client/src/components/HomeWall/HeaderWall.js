import React from "react"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export function HeaderWall(props){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item sm={12} align="center">
                        <div>
                            <h1>SoapBox</h1>
                            <p>Raised platform for your community</p>
                        </div>
                    </Grid>
                </Grid>
        </div>
    )
}
