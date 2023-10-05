import React, { useState, Fragment, useEffect } from 'react';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

// 초기 데이터
const todoDummyData = [];

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [todolist, setTodolist] = useState(todoDummyData);

    useEffect(() => {
        // 로컬 데이터 검색
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn === '1') {
            setIsLoggedIn(true);
        }
        console.log(isLoggedIn);
    }, []);

    // 로그인
    const loginHandler = (emain, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    // 로그아웃
    const loogoutHander = () => {
        console.log('loogoutHander');
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const addTodoHandler = datas => {
        console.log(datas);
        setTodolist(prevTodo => {
            const updateTodos = [...prevTodo];
            updateTodos.unshift(datas);
            return updateTodos;
        });
    };
    return (
        <Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={loogoutHander} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <TodoForm onAddTodo={addTodoHandler} />}
                {isLoggedIn && <TodoList items={todolist} />}
            </main>
        </Fragment>
    );
}

export default App;
