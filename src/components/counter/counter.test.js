
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './index.js';

test('renders counter component', () => {
  render(<Counter />);
  expect(screen.getByText('Decrease')).toBeInTheDocument();
});

test('counter renders decrease button', () => {
  render(<Counter />);
  const Decrease = screen.getByText('Decrease');
  expect(Decrease).toBeInTheDocument();
});

test('counter renders increase button', () => {
  render(<Counter />);
  const Increase = screen.getByText('Increase');
  expect(Increase).toBeInTheDocument();
});

// test('onClick calls a function', () => {
//   const mockFunction = jest.fn();
//   render(<Counter onClick={mockFunction}/>);
//   const button = screen.getByText('Decrease');
//   fireEvent.click(button)
//   expect(mockFunction).toHaveBeenCalled();
// });
