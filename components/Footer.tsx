export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm">© {new Date().getFullYear()} Marafiki Association. All rights reserved.</p>
        <p className="text-sm">
          Built with ❤️ in Calgary | <a href="/public/contact" className="underline">Contact Us</a>
        </p>
      </div>
    </footer>
  )
}
