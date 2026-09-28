import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('./pages/HomePage', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: () => React.createElement('div', null, 'Darena'),
  };
});

import App from './App';

test('affiche la marque Darena', () => {
  render(<App />);
  expect(screen.getByText(/Darena/i)).toBeInTheDocument();
});
