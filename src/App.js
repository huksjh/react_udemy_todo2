import React, { useState,Fragment } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

// 초기 데이터
const todoDummyData = [
    {
        id: Math.random().toString(),
        name: "Dummy",
        age: 22,
    },
    {
        id: Math.random().toString(),
        name: "Dummy1",
        age: 11,
    },
    {
        id: Math.random().toString(),
        name: "Dummy2",
        age: 32,
    },
];

function App() {
    const [todolist, setTodolist] = useState(todoDummyData);

    const addTodoHandler = (datas) => {
        console.log(datas);
        setTodolist((prevTodo) => {
            const updateTodos = [...prevTodo];
            updateTodos.unshift(datas);
            return updateTodos;
        });
    };
    return (
        <Fragment>
            {/**입력폼 */}
            <TodoForm onAddTodo={addTodoHandler} />

            {/**데이터 출력 */}
            <TodoList items={todolist} />
        </Fragment>
    );
}

export default App;
