import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Marafiki Association',
  description: 'Supporting Kenyans in the diaspora',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
