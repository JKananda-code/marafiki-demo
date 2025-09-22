import HeroImage from '../components/HeroImage'
import AuthButtons from '../components/AuthButtons'
import {ClerkProvider} from '@clerk/nextjs'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
      <HeroImage />
      <ClerkProvider>
        <AuthButtons />
        <Link href="/members">
          <button className="bg-blue-800 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition">
            Member Section
          </button>
        </Link>
      </ClerkProvider>
    
        <Link href="/public">
          <button className="bg-green-700 text-white px-6 py-2 rounded-md shadow hover:bg-green-600 transition">
            Public Section
          </button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center text-blue-900 mt-6">
        Welcome to Marafiki Association
      </h1>
      <p className="text-center text-gray-700">
        A community of Kenyans in Canada united by heritage, support, and shared purpose.
      </p>
    </div>
  )
}
