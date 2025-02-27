import React, { useState } from 'react';
import Sheet from './components/Sheet';
import Toolbar from './components/Toolbar';

const App = () => {
    const [data, setData] = useState(Array(10).fill(Array(10).fill('')));

    const updateCell = (rowIndex, colIndex, value) => {
        const newData = data.map((row, rIndex) => 
            rIndex === rowIndex ? row.map((cell, cIndex) => 
                cIndex === colIndex ? value : cell
            ) : row
        );
        setData(newData);
    };

    const applyFunction = (func, args) => {
        // Logic to apply the selected function to the data
    };

    return (
        <div>
            <Toolbar applyFunction={applyFunction} />
            <Sheet data={data} updateCell={updateCell} />
        </div>
    );
};

export default App;