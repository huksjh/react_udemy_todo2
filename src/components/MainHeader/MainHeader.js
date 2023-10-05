import React from 'react';

import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = props => {
    console.log(props);
    return (
        <header className={classes['main-header']}>
            <h1>Test</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    );
};

export default MainHeader;
