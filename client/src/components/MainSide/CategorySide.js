import React from "react"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export function CategorySide(props){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12}>
                    <div>
                        <h3>Categories:</h3>
                        <ul>
                            <li><a href="">Education</a></li>
                            <li><a href="">Law Enforcement</a></li>
                            <li><a href="">Infrastructure</a></li>
                            <li><a href="">Transportation</a></li>
                            <li><a href="">Environment</a></li>
                            <li><a href="">Public Spaces</a></li>
                            <li><a href="">Public Policy</a></li>
                            <li><a href="">Others</a></li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}