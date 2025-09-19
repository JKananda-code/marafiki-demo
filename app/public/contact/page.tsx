export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>
        For inquiries, suggestions, or support, please reach out to the Marafiki team:
      </p>
      <ul className="list-disc pl-5">
        <li>Email: <a href="mailto:info@marafiki.org" className="text-blue-700 underline">info@marafiki.org</a></li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Mailing Address: 123 Community Lane, Calgary, AB</li>
      </ul>
    </div>
  )
}
