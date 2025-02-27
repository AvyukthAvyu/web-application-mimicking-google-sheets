import React from 'react';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFunction: '',
            inputValue: ''
        };
    }

    handleFunctionChange = (event) => {
        this.setState({ selectedFunction: event.target.value });
    };

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    applyFunction = () => {
        const { selectedFunction, inputValue } = this.state;
        const values = inputValue.split(',').map(Number);
        let result;

        switch (selectedFunction) {
            case 'sum':
                result = values.reduce((acc, val) => acc + val, 0);
                break;
            case 'average':
                result = values.reduce((acc, val) => acc + val, 0) / values.length;
                break;
            case 'max':
                result = Math.max(...values);
                break;
            case 'min':
                result = Math.min(...values);
                break;
            case 'count':
                result = values.length;
                break;
            default:
                result = 'Select a function';
        }

        alert(`Result: ${result}`);
    };

    render() {
        return (
            <div className="toolbar">
                <select onChange={this.handleFunctionChange}>
                    <option value="">Select Function</option>
                    <option value="sum">Sum</option>
                    <option value="average">Average</option>
                    <option value="max">Max</option>
                    <option value="min">Min</option>
                    <option value="count">Count</option>
                </select>
                <input
                    type="text"
                    placeholder="Enter values separated by commas"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.applyFunction}>Apply</button>
            </div>
        );
    }
}

export default Toolbar;