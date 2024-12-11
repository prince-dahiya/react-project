import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './App.css'; // Optional: Import CSS for styling

const Calculator = () => {
  const [input, setInput] = useState(''); // To hold the current input
  const [result, setResult] = useState(''); // To hold the result of the calculation
  const [showAdvanced, setShowAdvanced] = useState(false); // State to control advanced buttons visibility

  const handleButtonClick = (value) => {
    if (value === '=') {
      // Evaluate the expression when '=' is pressed
      try {
        const evalResult = eval(input); // Use eval to calculate the result
        setResult(evalResult);
      } catch (error) {
        setResult('Error'); // Handle any errors in evaluation
      }
      setInput(''); // Clear input after calculation
    } else if (value === 'C') {
      // Clear the input and result when 'C' is pressed
      setInput('');
      setResult('');
    } else if (value === 'Del') {
      // Delete the last character from the input
      setInput((prev) => prev.slice(0, -1));
    } else if (value === '√') {
      // Calculate square root
      try {
        const evalResult = Math.sqrt(eval(input));
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === '^') {
      // Handle exponentiation
      setInput((prev) => prev + '**'); // Use '**' for exponentiation in eval
    } else if (value === 'cos') {
      // Calculate cosine
      try {
        const evalResult = Math.cos(eval(input));
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'sin') {
      // Calculate sine
      try {
        const evalResult = Math.sin(eval(input));
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'tan') {
      // Calculate tangent
      try {
        const evalResult = Math.tan(eval(input));
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'Rand') {
      // Generate a random number
      const randomNum = Math.random();
      setInput(randomNum.toString());
      setResult(randomNum);
    } else if (value === 'Advanced') {
      // Toggle the visibility of advanced buttons
      setShowAdvanced((prev) => !prev);
    } else {
      // Append the clicked button value to the input
      setInput((prev) => prev + value);
    }
  };

  return (
    <div id="calculator">
      <Display input={input} result={result} />
      <div className="button-container">
        {['7', '8', '9', '/'].map((item) => (
          <Button key={item} value={item} onClick={handleButtonClick} />
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <Button key={item} value={item} onClick={handleButtonClick} />
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <Button key={item} value={item} onClick={handleButtonClick} />
        ))}
        <Button value="0" onClick={handleButtonClick} />
        <Button value="C" onClick={handleButtonClick} />
        <Button value="Del" onClick={handleButtonClick} /> {/* Delete button */}
        <Button value="=" onClick={handleButtonClick} />
        <Button value="+" onClick={handleButtonClick} />
        <Button value="√" onClick={handleButtonClick} /> {/* Square root button */}
        <Button value="^" onClick={handleButtonClick} /> {/* Exponentiation button */}
        <Button value="Advanced" onClick={handleButtonClick} /> {/* Advanced button */}
        
        {/* Conditionally render advanced buttons */}
        {showAdvanced && (
          <>
            <Button value="Rand" onClick={handleButtonClick} /> {/* Random number button */}
            <Button value="cos" onClick={handleButtonClick} /> {/* Cosine button */}
            <Button value="sin" onClick={ handleButtonClick} /> {/* Sine button */}
            <Button value="tan" onClick={handleButtonClick} /> {/* Tangent button */}
          </>
        )}
      </div>
    </div>
  );
};

export default Calculator;