import React from 'react';
import './AppSearch.css';

const AppSearch = (param) => {
    
    const onChangeSearch = (event) => {
        param.search(event.target.value, 1);
    }

    return (
        <div className="App-Search">
            <input 
                type="text" 
                placeholder="Enter a movie name to search..."
                onChange={onChangeSearch} />
        </div>
    );
}

export default AppSearch;