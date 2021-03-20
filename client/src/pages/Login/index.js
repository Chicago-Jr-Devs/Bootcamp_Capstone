import './Login.css';
import { Header, Input, FormBtn } from "../../components/LoginForm"

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export default function Login(){
    const classes = useStyles();
    
    return (
        <div>
            <Grid container spacing={6}>
                <Grid item sm={12} align="center">
                    <Header />  
                    <Input />
                    <FormBtn />
                </Grid>
            </Grid>
            
        </div>
    )
}