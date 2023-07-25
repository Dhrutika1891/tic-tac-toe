import React from 'react';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  let symbolClass = '';
  if (value === 'X') {
    symbolClass = 'x';
  } else if (value === 'O') {
    symbolClass = 'o';
  }

  return (
    <button className={`square ${symbolClass}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
