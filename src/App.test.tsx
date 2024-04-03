import { render, fireEvent, waitFor } from '@testing-library/react';
import { test, expect, Mock } from 'vitest';
import App from './App';
import  useCountryQuery  from './hooks/useCountryQuery';


vi.mock('./hooks/useCountryQuery');

test('App renders correctly', () => {
  (useCountryQuery as unknown as Mock).mockReturnValue({
    data: undefined,
    loading: false,
    error: undefined,
  });

  const { getByText } = render(<App />);

  expect(getByText('Country Filter App')).toBeInTheDocument();
});

test('App updates filter and fetches data on filter change', async () => {
  const mockUseCountryQuery = vi.fn();
  mockUseCountryQuery.mockReturnValueOnce({
    data: undefined,
    loading: false,
    error: undefined,
  }).mockReturnValueOnce({
    data: { countries: [] },
    loading: false,
    error: undefined,
  });
  (useCountryQuery as unknown as Mock).mockImplementation(mockUseCountryQuery);

  const { getByTestId, getByText } = render(<App />);

  const filterInput = getByTestId('country-filter-input'); 
  fireEvent.change(filterInput, { target: { value: 'US' } }); 

  await waitFor(() => expect(mockUseCountryQuery).toHaveBeenCalledTimes(2));

  expect(getByText('No such country code')).toBeInTheDocument();
});
