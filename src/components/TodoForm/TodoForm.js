import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./TodoForm.module.css";

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
        console.log("formTodoSubmit");

        const submitData = {
            id: Math.random().toString(),
            name: userName,
            age: userAge,
        };
        props.onAddTodo(submitData);
    };
    return (
        <form onSubmit={formTodoSubmit} className={styles.input}>
            <div>
                <label>UserName</label>
                <input type="text" onChange={userNameChangeHandeler} />
            </div>
            <div>
                <label>Age</label>
                <input type="text" onChange={userAgeChangeHandeler} />
            </div>

            <Button type="submit">Add User</Button>
        </form>
    );
};

export default TodoForm;
