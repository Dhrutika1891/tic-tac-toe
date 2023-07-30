import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Square from '../components/Square';

describe('Square component', () => {
  it('renders with correct symbol and calls onSquareClick when clicked', () => {
    const mockOnSquareClick = jest.fn();
    const { getByText } = render(
      <Square value='X' onSquareClick={mockOnSquareClick} />
    );

    const squareButton = getByText('X');
    expect(squareButton).toBeInTheDocument();
    expect(squareButton).toHaveClass('x');

    fireEvent.click(squareButton);
    expect(mockOnSquareClick).toHaveBeenCalledTimes(1);
  });

  it('renders with correct class and calls onSquareClick with null value when clicked with "O" value', () => {
    const mockOnSquareClick = jest.fn();
    const { getByText } = render(
      <Square value='O' onSquareClick={mockOnSquareClick} />
    );

    const squareButton = getByText('O');
    expect(squareButton).toBeInTheDocument();
    expect(squareButton).toHaveClass('o');

    fireEvent.click(squareButton);
    expect(mockOnSquareClick).toHaveBeenCalledTimes(1);
  });
});
