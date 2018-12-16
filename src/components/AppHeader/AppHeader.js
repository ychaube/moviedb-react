import React from 'react';
import './AppHeader.css';

const AppHeader = (param) => {
    return (
        <div className="App-Header">{param.title}</div>
    );
}

export default AppHeader;