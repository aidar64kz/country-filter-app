import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import CountryList from './CountryList';

test('CountryList renders loading state correctly', () => {
  const { queryByTestId } = render(<CountryList loading={true} error={undefined} data={undefined} />);
  const loadingIndicator = queryByTestId('loading-indicator');
  expect(loadingIndicator).toBeTruthy();
});

test('CountryList renders error state correctly', () => {
  const errorMessage = 'An error occurred';
  const errorObject = new Error(errorMessage); 
  const { getByTestId } = render(<CountryList loading={false} error={errorObject} data={undefined} />);
  const errorIndicator = getByTestId('error-indicator');
  expect(errorIndicator).toBeTruthy();
  expect(errorIndicator).toHaveTextContent(`Error: ${errorMessage}`);
});

test('CountryList renders data correctly', () => {
  const data = {
    country: {
      code: 'US',
      name: 'United States',
    },
  };
  const { getByText } = render(<CountryList loading={false} error={undefined} data={data} />);
  const countryName = getByText('United States');
  const countryCode = getByText('US');
  
  expect(countryName).toBeTruthy();
  expect(countryCode).toBeTruthy();
});
