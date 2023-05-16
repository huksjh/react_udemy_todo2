import React from "react";

const TodoListLi = (props) => {
    console.log(props);
    return <li>props.children</li>;
};

export default TodoListLi;
