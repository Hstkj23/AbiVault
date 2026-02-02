// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AbiVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AbiVault/i);
    expect(titleElement).toBeInTheDocument();
});
