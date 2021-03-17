import './Register.css';
import { Header, Input, RegisterBtn } from "../../components/Register"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export default function Register(){
    const classes = useStyles();

    return (
        
        <div>
            <Grid container spacing={4}>
                <Grid item sm={12} align="center">
                    <Header />
                    <Input />
                    <RegisterBtn />
                </Grid>
            </Grid>
         </div>
    )
};