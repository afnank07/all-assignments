import React from "react";
import axios from 'axios';
// import { useHistory } from 'react-router-dom';


// const history = useHistory();

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [jwtToken, setJwtToken] = React.useState("");

    React.useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem('MY_JWT_TOKEN'));
        setJwtToken(token);
        console.log('jwtToken: ', token)
    },[])

    function loginUser(){
        axios.post("http://localhost:3000/admin/login", {}, {
            headers: {
                'username': email,
                'password': password
            }
        }).then(resp=> {
            console.log(resp.data.message);
            window.localStorage.setItem('MY_JWT_TOKEN', JSON.stringify(resp.data.token));
            // Redirect to 'about' page
            window.location.replace('http://localhost:5173/about');
        }).catch(err=> console.log(err));
    }

    return <div>
        <h1>Login to admin dashboard</h1>
        <br/>
        Email - <input type={"text"} onChange={e => setEmail(e.target.value)} />
        Password - <input type={"text"} onChange={e => setPassword(e.target.value)} />
        <br/>
        <button type="button" onClick={loginUser}>Login</button>
        <br/>
        New here? <a href="/register">Register</a>
    </div>
}

export default Login;