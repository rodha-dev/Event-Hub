import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventForm from "../components/EventForm";

function CreateEvent({
  formData,
  onChange,
  onSubmit,
  onCancel,
  submitLabel,
}) {
  return (
    <>
      <Navbar />

      <main className="create-event">
        <h1>
          {submitLabel === "Update Event"
            ? "Edit Event"
            : "Create a New Event"}
        </h1>

        <p>
          {submitLabel === "Update Event"
            ? "Update your event information below."
            : "Fill in the information below to publish your event."}
        </p>

        <EventForm
          formData={formData}
          onChange={onChange}
          onSubmit={onSubmit}
          submitLabel={submitLabel}
          onCancel={onCancel}
        />
      </main>

      <Footer />
    </>
  );
}

export default CreateEvent;