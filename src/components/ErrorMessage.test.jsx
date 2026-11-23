import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', () => {
  it('displays the supplied error message', () => {
    render(<ErrorMessage message="Something went wrong!" />);

    expect(
      screen.getByText('Something went wrong!')
    ).toBeInTheDocument();
  });

  it('uses an alert role for accessibility', () => {
    render(<ErrorMessage message="Unable to load events." />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});