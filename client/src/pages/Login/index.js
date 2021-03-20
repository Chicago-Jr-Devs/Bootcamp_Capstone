import './Login.css';
import { Header, Input, FormBtn } from "../../components/LoginForm"
import LoginImg from '../../img/drawkit-content-man-colour-800px.png'

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
                    <img src={LoginImg} alt="User avatar" style={{marginTop: "40px"}} width="30%"/>
                </Grid>
            </Grid>
            
        </div>
    )
}