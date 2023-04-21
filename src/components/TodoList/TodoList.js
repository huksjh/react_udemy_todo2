import React from "react";

// import styles from "./TodoList.module.css";

const TodoList = (props) => {
    console.log(props.items);
    return (
        <ul>
            {/*
            props.items.map((item) => {
                console.log(items);
            })
            */}
        </ul>
    );
};

export default TodoList;
