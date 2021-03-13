import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Header, Input, RegisterBtn } from "../../components/Register"
import './Register.css';

export default function Register(){
    const [user, setUser] = useState({email:'', password:'', firstName:'', lastName:'', zipCode:''});
    const [users, setUsers] = useState([]);

    const handleData = (event) => {
        const { id, value } = event.target
        setUser({...user, [id]: value})
    }

    async function submitUser(event) {
        event.preventDefault()
        console.log("hi", user)
        await axios.post('/users', user)
        
        setUsers([...users, user])
        setUser({email:'', password:'', firstName:'', lastName:'', zipCode:''})
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