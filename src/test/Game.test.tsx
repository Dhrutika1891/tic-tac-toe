import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Game from '../components/Game';

describe('Game component', () => {
  it('renders without errors', () => {
    render(<Game />);
  });

  it('starts with an empty board', () => {
    const { getAllByRole } = render(<Game />);
    const squares = getAllByRole('button', { name: '' });
    expect(squares.length).toBe(16);

    squares.forEach((square) => {
      expect(square).toHaveTextContent('');
    });
  });

  it('allows players to make moves and clears the board when "Clear" is clicked', () => {
    const { getAllByRole, getByRole } = render(<Game />);
    const squares = getAllByRole('button', { name: '' });
    const clearButton = getByRole('button', { name: 'Clear' });

    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[2]);
    fireEvent.click(squares[3]);

    expect(squares[0]).toHaveTextContent('X');
    expect(squares[1]).toHaveTextContent('O');
    expect(squares[2]).toHaveTextContent('X');
    expect(squares[3]).toHaveTextContent('O');

    fireEvent.click(clearButton);

    squares.forEach((square) => {
      expect(square).toHaveTextContent('');
    });
  });
});
