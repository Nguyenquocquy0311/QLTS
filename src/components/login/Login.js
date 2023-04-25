import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    //check user
    if (username === '') {
        setErrorMessage('Please enter a username !');
        alert(errorMessage);
        return;
    } 
  
    // Check pass
    if (password === '') {
        setErrorMessage('Please enter a password');
        alert(errorMessage);
        return;
    } else if (password.length < 8 || password.length > 16) {
        setErrorMessage('Password must be greater than 8 characters and less than 16 characters !');
        alert(errorMessage);
        return;
    }

    axios
        .post("/api/login", {
            username: username,
            password: password,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("username:" + username + ", password:" + password);
    };

  return (
    <form onSubmit={onSubmit}>
        <h3>Login Form</h3>
        <label>
            Username:
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="abc@gmail.com"
            />
        </label>
        <br />
        <label>
            Password:
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <br />
        <button type="submit">Login</button>
    </form>
  );
};

export default Login;