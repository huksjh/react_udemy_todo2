import React from "react";

// import styles from "./TodoList.module.css";
import Card from "../UI/Card/Card";
import TodoListItem from "../TodoList/TodoListItem";

const TodoList = (props) => {
    console.log(props.items);
    return (
        <Card>
            <ul>
                {props.items.map((item) => (
                    // console.log(item);
                    <TodoListItem key={item.id} id={item.id} Item={item}>
                        {item.name}
                    </TodoListItem>
                ))}
            </ul>
        </Card>
    );
};

export default TodoList;
