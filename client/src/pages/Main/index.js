import React from "react"
import { UserSide, SoapboxSide, CategorySide } from "../../components/MainSide"
import { HeaderWall, SearchWall, CardWall } from "../../components/MainWall"

// Import material UI components
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

// Import style sheet
import './Main.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flex: '1 0 auto',
        margin: theme.spacing(1),
      },
}));

function Main(props){
    const classes = useStyles();

    const { width } = props;      
    
    return (
        <div className={classes.root}>
            
            <Grid container spacing={4}>
            
                <Hidden xsDown>
                    <Grid item xs={12} sm={3}>
                        <UserSide />
                        <SoapboxSide />
                        <CategorySide />
                    </Grid>
                </Hidden>   
                <Grid item xs={12} sm={6}>
                    <HeaderWall />
                    <SearchWall />
                    <CardWall />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                    {/* empty space on  desktop       */}
                </Grid>
            </Grid>

            <div className={classes.root}>
                <Typography variant="subtitle1">Current width: {width}</Typography>
                <div className={classes.container}>
                    <Hidden xsUp>
                    <Paper className={classes.paper}>xsUp</Paper>
                    </Hidden>
                    <Hidden smUp>
                    <Paper className={classes.paper}>smUp</Paper>
                    </Hidden>
                    <Hidden mdUp>
                    <Paper className={classes.paper}>mdUp</Paper>
                    </Hidden>
                    <Hidden lgUp>
                    <Paper className={classes.paper}>lgUp</Paper>
                    </Hidden>
                    <Hidden xlUp>
                    <Paper className={classes.paper}>xlUp</Paper>
                    </Hidden>
                </div>
            </div>
            
        </div>
    )
}

Main.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Main);