import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EventFilters from './EventFilters';

describe('EventFilters Component', () => {
  it('displays the search input', () => {
    render(
      <EventFilters
        searchTerm=""
        setSearchTerm={vi.fn()}
        selectedCategory="All"
        setSelectedCategory={vi.fn()}
      />
    );

    expect(
      screen.getByPlaceholderText('Search events...')
    ).toBeInTheDocument();
  });

  it('calls setSearchTerm when the user types', () => {
    const setSearchTerm = vi.fn();

    render(
      <EventFilters
        searchTerm=""
        setSearchTerm={setSearchTerm}
        selectedCategory="All"
        setSelectedCategory={vi.fn()}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText('Search events...'),
      { target: { value: 'Technology' } }
    );

    expect(setSearchTerm).toHaveBeenCalledWith('Technology');
  });

  it('displays the category options', () => {
    render(
      <EventFilters
        searchTerm=""
        setSearchTerm={vi.fn()}
        selectedCategory="All"
        setSelectedCategory={vi.fn()}
      />
    );

    expect(screen.getByRole('option', { name: 'All Categories' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Music' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Technology' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Sports' })).toBeInTheDocument();
  });

  it('calls setSelectedCategory when a category is selected', () => {
    const setSelectedCategory = vi.fn();

    render(
      <EventFilters
        searchTerm=""
        setSearchTerm={vi.fn()}
        selectedCategory="All"
        setSelectedCategory={setSelectedCategory}
      />
    );

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Technology' },
    });

    expect(setSelectedCategory).toHaveBeenCalledWith('Technology');
  });
});