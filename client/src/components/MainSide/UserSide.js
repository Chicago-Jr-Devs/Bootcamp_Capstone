import React from "react"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export function UserSide(props){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={4}>
                    <img src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg" alt="User image" width="100px" height="100px"/>
                </Grid>

                <Grid item sm={8}>
                    <div>
                        <h4>User Name</h4>
                        <a href="">My account</a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}