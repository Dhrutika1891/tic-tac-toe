import React from 'react';
import { render } from '@testing-library/react';
import Board from '../components/Board';

test('renders the Board component', () => {
  const { getByText } = render(
    <Board
      xIsNext={true}
      squares={Array(9).fill(null)}
      onPlay={() => {}}
      calculateWinner={() => null}
    />
  );

  const statusElement = getByText('Next player: X');
  expect(statusElement).toBeInTheDocument();
});
