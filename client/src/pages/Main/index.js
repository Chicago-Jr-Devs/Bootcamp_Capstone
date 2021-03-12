import React from "react"
import { UserSide, SoapboxSide, CategorySide } from "../../components/MainSide"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Import style sheet
import './Main.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export default function Main(){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3}>
                    <UserSide />
                    <SoapboxSide />
                    <CategorySide />
                </Grid>

                <Grid item xs={12} sm={9}>
                {/* add header + search + card here */}
                </Grid>
            </Grid>
        </div>
    )
}