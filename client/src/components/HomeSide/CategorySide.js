import React from "react"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GavelIcon from '@material-ui/icons/Gavel';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CommuteIcon from '@material-ui/icons/Commute';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import EcoIcon from '@material-ui/icons/Eco';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: 360,
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
                            {/* <li><a href=""><MenuBookIcon /> Education</a></li>
                            <li><a href=""><GavelIcon /> Law Enforcement</a></li>
                            <li><a href=""><EmojiTransportationIcon /> Infrastructure</a></li>
                            <li><a href=""><CommuteIcon /> Transportation</a></li>
                            <li><a href=""><EcoIcon /> Environment</a></li>
                            <li><a href=""><NaturePeopleIcon /> Public Spaces</a></li>
                            <li><a href=""><AccountBalanceIcon /> Public Policy</a></li>
                            <li><a href=""><AnnouncementIcon /> Others</a></li> */}
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}