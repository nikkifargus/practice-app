
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './index.js';

test('renders counter component', () => {
  render(<Counter />);
  expect(screen.getByText('Decrease')).toBeInTheDocument();
});

test('counter renders 2 buttons', () => {
  render(<Counter />);
  const Decrease = screen.getByText('Decrease');
  const Increase = screen.getByText('Increase');
  expect(Decrease).toBeInTheDocument();
  expect(Increase).toBeInTheDocument();
});

test('onClick calls a function', () => {
  const mockFunction = jest.fn();
  render(<Counter onClick={mockFunction}/>);
  const button = screen.getByText('Decrease');
  fireEvent.click(button)
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
