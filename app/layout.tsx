import './globals.css'
import Navbar from '../components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Marafiki. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
