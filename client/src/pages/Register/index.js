import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Header, Input, RegisterBtn } from "../../components/Register"
import './Register.css';

// Import material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export default function Register(){
    const [user, setUser] = useState({email:'', password:'', first_name:'', last_name:'', zipcode:''});
    const [users, setUsers] = useState([]);

    const handleData = (event) => {
        const { id, value } = event.target
        setUser({...user, [id]: value})
    }

    async function submitUser(event) {
        event.preventDefault()
        console.log("hi", user)
        await axios.post('/register', user)
        
        setUsers([...users, user])
        setUser({email:'', password:'', first_name:'', last_name:'', zipcode:''})
    }

    useEffect(() => console.log("user", users), [users]);

    return (
        <div>
            <Header />
            <Input handleData={handleData}/>
            <RegisterBtn submitUser={submitUser}/>
         </div>
    )
};