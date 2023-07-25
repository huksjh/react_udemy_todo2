import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./TodoForm.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const TodoForm = (props) => {
    // Username 설정
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    const userNameChangeHandeler = (e) => {
        setUserName(e.target.value);
    };
    const userAgeChangeHandeler = (e) => {
        setUserAge(+e.target.value);
    };
    const formTodoSubmit = (event) => {
        event.preventDefault();
        //console.log("formTodoSubmit");
        //console.log(userAge.toString().length);
        if (userName.trim().length === 0 || userAge.length === 0) {
            console.log("빈값 있음");

            return;
        }

        if (userAge < 1) {
            console.log("음수");
            return;
        }

        const submitData = {
            id: Math.random().toString(),
            name: userName,
            age: userAge,
        };

        // App.js 에서 넘어온 함수(onAddTodo={addTodoHandler})로 입력받은 값을 전달
        props.onAddTodo(submitData);

        event.target.reset();
        setUserName("");
        setUserAge("");
    };
    return (
        <>
            <ErrorModal title="테스트" message="ㅁㅁㅁㅁ" />;
            <Card>
                <form onSubmit={formTodoSubmit} className={styles.input}>
                    <div>
                        <label>UserName</label>
                        <input type="text" onChange={userNameChangeHandeler} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" onChange={userAgeChangeHandeler} />
                    </div>

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default TodoForm;
