// src/app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Welcome to Marafiki</h2>
      <p>
        Marafiki is a membership-based association supporting members during bereavement through shared contributions.
      </p>
      <div className="flex gap-4">
        <Link href="/members" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Members Section
        </Link>
        <Link href="/public" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Public Section
        </Link>
      </div>
    </div>
  )
}


       