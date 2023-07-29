import React from "react";
import axios from "axios";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [jwtToken, setJwtToken] = React.useState("");

    React.useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem('MY_JWT_TOKEN'));
        setJwtToken(token);
        console.log("token: ", token)
    }, []);

    function registerUser(){
        axios.post("http://localhost:3000/admin/signup", {
            "username": email,
            "password": password
        }).then(resp => {
            console.log("resp: ", resp.data.message);
            console.log("resp: ", resp.data.token);
            window.localStorage.setItem('MY_JWT_TOKEN', JSON.stringify(resp.data.token));
        }).catch(err => console.log(err))
    }

    return <div>
        <h1>Register to the website</h1>
        <br/>
        <span>Email</span>
        <input type={"text"} onChange={e => setEmail(e.target.value)} />
        <span>Password</span>
        <input type="text" onChange={e => setPassword(e.target.value)}/>
        <button type="button" onClick={registerUser}>Register</button>
        <br/>
        Already a user? <a href="/login">Login</a>
    </div>
}

export default Register;