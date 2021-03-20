import React from "react"
import { UserSide, SoapboxSide, CategorySide } from "../../components/HomeSide"
import { HeaderWall, SearchWall, CardWall } from "../../components/HomeWall"

// Import material UI components
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

// Import style sheet
import './Home.css';

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

function Home(props){
    const classes = useStyles();

    const { width } = props;      
    
    return (
        <div className={classes.root}>
            
            <Grid container spacing={4}>
            
                <Hidden xsDown>
                    <Grid item xs={12} sm={3}>
                        <UserSide />
                        <SoapboxSide />
                        {/* <CategorySide /> */}
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
        </div>
    )
}

Home.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Home);