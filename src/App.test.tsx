import { render, fireEvent, waitFor } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

vitest.mock('./hooks/useCountryQuery', () => ({
  __esModule: true,
  default: vitest.fn(() => ({
    data: [],
    loading: false,
    error: null,
  })),
}));

test('App component renders without crashing', () => {
  render(<App />);
});

test('App component updates country code state on filter chagne', async () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('country-filter-input') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'US' } });

  await waitFor(() => {
    expect(input.value).toBe('US');
  });
});
