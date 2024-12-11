// src/Display.js
import React from 'react';

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="input">{input || '0'}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;