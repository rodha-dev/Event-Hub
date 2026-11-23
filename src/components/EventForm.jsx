function EventForm({
  formData,
  onChange,
  onSubmit,
  submitLabel = "Create Event",
  onCancel,
}) {
  return (
    <form onSubmit={onSubmit} className="event-form">
      <input
        type="text"
        name="title"
        placeholder="Event title"
        value={formData.title}
        onChange={onChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Event category"
        value={formData.category}
        onChange={onChange}
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={onChange}
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Event location"
        value={formData.location}
        onChange={onChange}
        required
      />

      <textarea
        name="description"
        placeholder="Event description"
        value={formData.description}
        onChange={onChange}
        required
      />

      <button type="submit">
        {submitLabel}
      </button>

      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EventForm;