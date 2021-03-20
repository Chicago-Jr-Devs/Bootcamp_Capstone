import React from "react"
import Avatar from '../../img/User-Avatar-Download-Transparent-PNG-Image.png'

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
        <div className={classes.root} >
            <div style={{marginTop: "40px"}}>
                <Grid container spacing={4}>
                    <Grid item sm={4}>
                        <img src={Avatar} alt="User avatar" width="100px" height="100px"/>
                    </Grid>

                    <Grid item sm={8}>
                        <div>
                            <h4>Username</h4>
                            <a href="">My account</a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}