import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loading from './Loading';

describe('Loading Component', () => {
  it('displays the loading message', () => {
    render(<Loading />);

    expect(
      screen.getByText('Loading, please wait...')
    ).toBeInTheDocument();
  });

  it('renders the loading container', () => {
    const { container } = render(<Loading />);

    expect(container.querySelector('.loading')).toBeInTheDocument();
  });
});