import React, { useState,Fragment } from "react";
import "./App.css";

import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

// 초기 데이터
const todoDummyData = [];

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [todolist, setTodolist] = useState(todoDummyData);
    
    // 로그인
    const loginHandler = (emain, password) =>{
        setIsLoggedIn(true);
    }

    // 로그아웃
    const loogoutHander = () => {
        setIsLoggedIn(false);
    }

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
            <MainHeader isAuthenticated={isLoggedIn} onLogout={loogoutHander}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn && <TodoForm onAddTodo={addTodoHandler} /> }
                {isLoggedIn && <TodoList items={todolist} />}
            </main>
            
        </Fragment>
    );
}

export default App;
