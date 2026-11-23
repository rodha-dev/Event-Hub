import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EventCard from './EventCard';

describe('EventCard Component', () => {
  const event = {
    title: 'Tech Conference 2026',
    date: 'December 10, 2026',
    location: 'Nairobi',
    category: 'Technology',
    description: 'A conference for technology enthusiasts.',
  };

  it('displays the event information', () => {
    render(<EventCard {...event} />);

    expect(screen.getByText(event.title)).toBeInTheDocument();
    expect(screen.getByText(event.date)).toBeInTheDocument();
    expect(screen.getByText(event.location)).toBeInTheDocument();
    expect(screen.getByText(event.category)).toBeInTheDocument();
    expect(screen.getByText(event.description)).toBeInTheDocument();
  });

  it('displays the View Details button', () => {
    render(<EventCard {...event} />);

    expect(
      screen.getByRole('button', { name: /view details/i })
    ).toBeInTheDocument();
  });

  it('calls onViewDetails when the button is clicked', () => {
    const handleViewDetails = vi.fn();

    render(
      <EventCard {...event} onViewDetails={handleViewDetails} />
    );

    fireEvent.click(
      screen.getByRole('button', { name: /view details/i })
    );

    expect(handleViewDetails).toHaveBeenCalledTimes(1);
  });
});