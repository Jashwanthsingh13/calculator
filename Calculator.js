import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(result).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else {
            setResult(result + value);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input
                type="text"
                value={result}
                readOnly
                style={{
                    width: '200px',
                    height: '40px',
                    fontSize: '20px',
                    marginBottom: '20px',
                }}
            />
            <div>
                <button onClick={() => handleClick('7')} style={buttonStyle}>7</button>
                <button onClick={() => handleClick('8')} style={buttonStyle}>8</button>
                <button onClick={() => handleClick('9')} style={buttonStyle}>9</button>
                <button onClick={() => handleClick('+')} style={operatorStyle}>+</button>
            </div>
            <div>
                <button onClick={() => handleClick('4')} style={buttonStyle}>4</button>
                <button onClick={() => handleClick('5')} style={buttonStyle}>5</button>
                <button onClick={() => handleClick('6')} style={buttonStyle}>6</button>
                <button onClick={() => handleClick('-')} style={operatorStyle}>-</button>
            </div>
            <div>
                <button onClick={() => handleClick('1')} style={buttonStyle}>1</button>
                <button onClick={() => handleClick('2')} style={buttonStyle}>2</button>
                <button onClick={() => handleClick('3')} style={buttonStyle}>3</button>
                <button onClick={() => handleClick('*')} style={operatorStyle}>*</button>
            </div>
            <div>
                <button onClick={() => handleClick('0')} style={buttonStyle}>0</button>
                <button onClick={() => handleClick('.')} style={buttonStyle}>.</button>
                <button onClick={() => handleClick('C')} style={clearStyle}>C</button>
                <button onClick={() => handleClick('/')} style={operatorStyle}>/</button>
            </div>
            <div>
                <button onClick={() => handleClick('=')} style={equalStyle}>=</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    width: '50px',
    height: '50px',
    fontSize: '20px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    cursor: 'pointer',
};

const operatorStyle = {
    width: '50px',
    height: '50px',
    fontSize: '20px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: '#ffa500',
    border: 'none',
    cursor: 'pointer',
};

const clearStyle = {
    width: '50px',
    height: '50px',
    fontSize: '20px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: '#ff0000',
    border: 'none',
    cursor: 'pointer',
};

const equalStyle = {
    width: '50px',
    height: '50px',
    fontSize: '20px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: '#008000',
    border: 'none',
    cursor: 'pointer',
};

export default Calculator;
