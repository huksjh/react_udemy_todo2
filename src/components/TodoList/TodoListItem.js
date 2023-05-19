import React from "react";

const TodoListItem = (props) => {
    console.log("TodoListItem", props);
    return <li>{props.children}</li>;
};

export default TodoListItem;
