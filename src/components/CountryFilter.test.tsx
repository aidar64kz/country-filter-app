import { render, fireEvent, waitFor } from '@testing-library/react';
import { test, expect } from 'vitest';
import CountryFilter from './CountryFilter';

test('CountryFilter updates filter correctly', async () => {
  const onFilterChangeMock = vitest.fn();
  const { getByTestId } = render(
    <CountryFilter filter="" onFilterChange={onFilterChangeMock} />
  );

  const input = getByTestId('country-filter-input') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'ee' } });

  await waitFor(() => {
    expect(onFilterChangeMock).toHaveBeenCalledWith('EE');
  });
});

test('CountryFilter renders with the correct placeholder', () => {
  const { getByPlaceholderText } = render(
    <CountryFilter filter="" onFilterChange={() => {}} />
  );

  const input = getByPlaceholderText(
    'Write a country code. For example: EE'
  );

  expect(input).toBeTruthy();
});

test('CountryFilter renders with the correct value', () => {
  const filter = 'US';
  const { getByTestId } = render(
    <CountryFilter filter={filter} onFilterChange={() => {}} />
  );

  const input = getByTestId('country-filter-input') as HTMLInputElement;

  expect(input.value).toBe(filter);
});

test('CountryFilter debounces changes', async () => {
  const onFilterChangeMock = vi.fn();
  const filter = '';

  const { getByTestId } = render(
    <CountryFilter filter={filter} onFilterChange={onFilterChangeMock} />
  );

  const input = getByTestId('country-filter-input');

  fireEvent.change(input, { target: { value: 'ee' } });
  await new Promise((resolve) => setTimeout(resolve, 400)); 
  expect(onFilterChangeMock).not.toHaveBeenCalled();

  fireEvent.change(input, { target: { value: 'FR' } });
  await new Promise((resolve) => setTimeout(resolve, 600));
  expect(onFilterChangeMock).toHaveBeenCalledWith('FR');
});
