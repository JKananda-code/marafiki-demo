export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800">Contact Us</h2>
      <p className="text-gray-700">
        We’d love to hear from you. Whether you have questions, suggestions, or want to get involved, reach out to the Marafiki team.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-800">General Inquiries</h3>
          <p>Email: <a href="mailto:info@marafiki.ca" className="text-blue-700">info@marafiki.ca</a></p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Chairman</h3>
          <p>Email: <a href="mailto:chairman@marafiki.ca" className="text-blue-700">chairman@marafiki.ca</a></p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Treasurer</h3>
          <p>Email: <a href="mailto:treasurer@marafiki.ca" className="text-blue-700">treasurer@marafiki.ca</a></p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Youth Programs</h3>
          <p>Email: <a href="mailto:youth@marafiki.ca" className="text-blue-700">youth@marafiki.ca</a></p>
        </div>
      </div>
    </div>
  )
}
