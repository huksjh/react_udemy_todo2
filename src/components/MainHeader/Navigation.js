import React from 'react';

import classes from './Navigation.module.css';

const Navigation = props => {
    return (
        <nav className={classes.nav}>
            <ul>
                {props.isLoggedIn && (
                    <li>
                        <a href="/">User</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
