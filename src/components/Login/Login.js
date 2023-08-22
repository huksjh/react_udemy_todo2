import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";

const Login = (props) =>{
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    
    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value)
    }

    const passwordChangeHandler = (event) =>{
        setEnteredPassword(event.target.value)
    }

    const submitHandler = (evnet) =>{
        evnet.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);

    }
    return <Card className={classes.Login}>
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label>Email</label>
                <input type="text" id="email" onChange={emailChangeHandler} />
            </div>
            <div className={classes.control}>
                <label>Password</label>
                <input type="password" id="password" onChange={passwordChangeHandler} />
            </div>
            <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>로그인</Button>
            </div>
        </form>

    </Card>;
}

export default Login;