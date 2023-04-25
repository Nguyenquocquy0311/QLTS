import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
        setErrorMessage('Please enter an email address');
        alert(errorMessage);
        return;
    } else {
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            setErrorMessage('Wrong email format !');
            alert(errorMessage);
            return;
        }
    }
  
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
            email: email,
            password: password,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("email:" + email + ", password:" + password);
    };

  return (
    <form onSubmit={onSubmit}>
        <h3>Login Form</h3>
        <label>
            Email:
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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