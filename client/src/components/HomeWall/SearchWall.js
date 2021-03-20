import React from "react"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export function SearchWall(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12} align="center">
                    <div>
                        <TextField 
                            id="search-field-wall" 
                            label="Search field"
                            type="search"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />    
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}