import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm/TodoForm";
import Card from "./components/UI/Card/Card";
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
        <div>
            {/**입력폼 */}
            <Card>
                <TodoForm onAddTodo={addTodoHandler} />
            </Card>

            {/**데이터 출력 */}
            <TodoList items={todolist} />
        </div>
    );
}

export default App;
