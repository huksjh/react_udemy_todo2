import React, { useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';

const emailRedducer = (state, action) =>{
    console.log(state, action)
    if(action.type === 'USER_INPUT'){
        return {value : action.val, isValid: action.val.includes('@')}
    }
    return {value : '', isValid: false}
}
const Login = props => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsvalid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailRedducer, {
        value: '',
        isValid: false
    })

    // useEffect(() => {
    //     // 1차 영역
    //     // 처음 컴포넌트 마운트 될때 1차 실행
    //     console.log('1차 영역 useEffect running');
    //     const isformchkTimeout = setTimeout(() => {
    //         console.log('폼체크 로그');
    //         setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
    //     }, 500);

    //     return () => {
    //         // 2차 영역
    //         // 의존성 항목이 있으면 해당 의존성 항목 enteredEmail, enteredPassword state 변경 감지해서 2차 영역 실행후 1창영역 실행
    //         // 의존성 항목이 없으면 2차 영역 실행 안하고 해당 함수에서 벋어났을때 실행됨
    //         console.log('2차 영역 useEffect cleanup');
    //         clearTimeout(isformchkTimeout);
    //     };
    // }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = event => {
        // console.log(event.target.value);
        // setEnteredEmail(event.target.value);
        dispatchEmail({type:'USER_INPUT', val: event.target.value})
        setFormIsValid(emailState.value.includes('@') && enteredPassword.trim().length > 6);

        
    };

    const validateEmailHandler = event => {
        // setEmailIsValid(enteredEmail.includes('@'));
        setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
    };

    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value);
    };

    const validatePasswordHandler = event => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = evnet => {
        evnet.preventDefault();
        props.onLogin(emailState.value, enteredPassword);
    };

    return (
        <Card className={classes.Login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label>Email</label>
                    <input
                        type="text"
                        id="email"
                        value={emailState.value}
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
