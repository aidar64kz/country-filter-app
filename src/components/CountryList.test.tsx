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
    countries: [
      {
        code: 'US',
        name: 'United States',
      },
      {
        code: 'CA',
        name: 'Canada',
      }
    ]
  };
  const { getByText } = render(<CountryList loading={false} error={undefined} data={data} />);
  const countryNameUS = getByText('United States');
  const countryCodeUS = getByText('US');
  const countryNameCA = getByText('Canada');
  const countryCodeCA = getByText('CA');
  
  expect(countryNameUS).toBeTruthy();
  expect(countryCodeUS).toBeTruthy();
  expect(countryNameCA).toBeTruthy();
  expect(countryCodeCA).toBeTruthy();
});
