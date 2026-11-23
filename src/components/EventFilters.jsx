function EventFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="event-filters">
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Music">Music</option>
        <option value="Technology">Technology</option>
        <option value="Sports">Sports</option>
        <option value="Business">Business</option>
        <option value="Arts & Culture">Arts & Culture</option>
      </select>
    </div>
  );
}

export default EventFilters;