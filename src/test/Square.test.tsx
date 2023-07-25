// import React from 'react';
// import { render } from '@testing-library/react';
// import Square from '../components/Square';
// test('renders Square component ', () => {
//   render(<Square value={'a'} onSquareClick={() => {}} />);
// });

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Square from '../components/Square'; // Replace the path with the correct location of your Square component

// Mock the function passed as prop
const mockOnSquareClick = jest.fn();

// Define the test data for different scenarios
const testData = [{ value: null }, { value: 'X' }, { value: 'O' }];

describe('Square component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test.each(testData)('renders square with value "%s"', ({ value }) => {
    const { container, getByText } = render(
      <Square value={value} onSquareClick={mockOnSquareClick} />
    );
    const squareButton = container.querySelector('.square')!; // Non-null assertion here

    expect(squareButton).toBeInTheDocument();

    if (value !== null) {
      expect(squareButton).toHaveClass(value === 'X' ? 'x' : 'o');
      expect(getByText(value)).toBeInTheDocument();
    } else {
      expect(squareButton).not.toHaveClass('x');
      expect(squareButton).not.toHaveClass('o');
      expect(squareButton).toBeEmptyDOMElement();
    }
  });

  test.each(testData)(
    'triggers onSquareClick when the button is clicked',
    ({ value }) => {
      const { container } = render(
        <Square value={value} onSquareClick={mockOnSquareClick} />
      );
      const squareButton = container.querySelector('.square')!; // Non-null assertion here

      fireEvent.click(squareButton);

      expect(mockOnSquareClick).toHaveBeenCalledTimes(1);
    }
  );
});
