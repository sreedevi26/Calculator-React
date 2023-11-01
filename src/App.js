import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const CalculResult = () => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch (error) {
      setDisplay('Error, Invalid Entry');
    }
  };

  const cleardisplay = () => {
    setDisplay('');
  };

  return (
    <div className="outer-container">
      <div className="top-section" style={{ background: 'danger' }}>
        Calculator
      </div>
      <br />

      <div className="calculator-screen-section">
        <input
          id="txt"
          type="text"
          className="form-control inp_num"
          value={display}
        />
        <br /><br />
        <div id="result"></div>
      </div>

      <div className="calculator-Button-section">
       
        <button className="calculator-item" onClick={() => handleClick(7)}>7</button>
        <button className="calculator-item" onClick={() => handleClick(8)}>8</button>
        <button className="calculator-item" onClick={() => handleClick(9)}>9</button>
        <button className="calculator-item" onClick={() => handleClick('+')}>+</button>
        <button className="calculator-item" onClick={() => handleClick(4)}>4</button>
        <button className="calculator-item" onClick={() => handleClick(5)}>5</button>
        <button className="calculator-item" onClick={() => handleClick(6)}>6</button>
        <button className="calculator-item" onClick={() => handleClick('-')}>-</button>
        <button className="calculator-item" onClick={() => handleClick(1)}>1</button>
        <button className="calculator-item" onClick={() => handleClick(2)}>2</button>
        <button className="calculator-item" onClick={() => handleClick(3)}>3</button>
        <button className="calculator-item" onClick={() => handleClick('.')}>.</button>
        <button className="calculator-item" onClick={() => handleClick(0)}>0</button>
        <button className="calculator-item" onClick={() => handleClick('/')}>/</button>
        <button className="calculator-item" onClick={() => handleClick('*')}>x</button>
        
        <button className="calculator-item special-key" onClick={cleardisplay}>AC</button>
        <button className="calculator-item special-key"onClick={CalculResult}>=</button>
      </div>
    </div>
  );
}

export default App;
