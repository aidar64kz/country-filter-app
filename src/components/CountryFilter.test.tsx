import { render, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import CountryFilter from './CountryFilter';

test('CountryFilter updates filter correctly', () => {
  const onFilterChangeMock = vi.fn();
  const filter = 'US';

  const { getByTestId } = render(
    <CountryFilter filter={filter} onFilterChange={onFilterChangeMock} />
  );

  const input = getByTestId('country-filter-input');
  fireEvent.change(input, { target: { value: 'ee' } });

  expect(onFilterChangeMock).toHaveBeenCalledWith('EE');
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
