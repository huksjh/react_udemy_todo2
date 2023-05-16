import React from "react";

// import styles from "./TodoList.module.css";
import TodoListLi from "../TodoList/TodoListLi";

const TodoList = (props) => {
    console.log(props.items);
    return (
        <ul>
            {props.items.map((item) => {
                console.log(item);
                <TodoListLi liItem={item}>{item.name}</TodoListLi>;
            })}
        </ul>
    );
};

export default TodoList;
