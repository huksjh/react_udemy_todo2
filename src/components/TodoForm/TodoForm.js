import React, { useState, useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./TodoForm.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const TodoForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // Username 설정
    /*
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    */
    const [isError, setIsError] = useState();
    

    /*
    const userNameChangeHandeler = (e) => {
        setUserName(e.target.value);
    };
    const userAgeChangeHandeler = (e) => {
        setUserAge(+e.target.value);
    };
    */
    const formTodoSubmit = (event) => {
        event.preventDefault();
        console.log(nameInputRef);
        //console.log("formTodoSubmit");
        //console.log(userAge.toString().length);
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.length === 0) {
            console.log("빈값 있음");
            setIsError({title:'경고', message:'필수값 누락입니다. 이름, 나이를 입력해주세요'});
            return;
        }

        if (enteredAge < 1) {
            console.log("음수");
            setIsError({title:'경고', message:'나이는 음수값으로 입력할수 없습니다.'});
            return;
        }

        const submitData = {
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge,
        };

        // App.js 에서 넘어온 함수(onAddTodo={addTodoHandler})로 입력받은 값을 전달
        props.onAddTodo(submitData);

        // 초기화
        nameInputRef.current.value ="";
        ageInputRef.current.value ="";

    };

    // 모달창 닫기
    const errorHandler = e =>{
        console.log('errorHandler')
        setIsError(null);
    }
    return (
        <React.Fragment>
            {isError? <ErrorModal title={isError.title} message={isError.message} onCloseHandler={errorHandler} /> : ''}
            <Card>
                <form onSubmit={formTodoSubmit} className={styles.input}>
                    <div>
                        <label>UserName</label>
                        <input type="text" id="username" ref={nameInputRef} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" id="age" ref={ageInputRef} />
                    </div>

                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default TodoForm;
