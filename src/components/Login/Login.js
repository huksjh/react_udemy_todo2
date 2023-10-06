import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';

const Login = props => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsvalid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const isformchkTimeout = setTimeout(() => {
            console.log('폼체크 로그');
            setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
        }, 500);

        return () => {
            console.log('클린업 로그');
            clearTimeout(isformchkTimeout);
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = event => {
        // console.log(event.target.value);
        setEnteredEmail(event.target.value);
    };

    const validateEmailHandler = event => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value);
    };

    const validatePasswordHandler = event => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = evnet => {
        evnet.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.Login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailIsValid === false ? classes.invalid : ''
                    }`}
                >
                    <label>Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordIsvalid === false ? classes.invalid : ''
                    }`}
                >
                    <label>Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        로그인
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
