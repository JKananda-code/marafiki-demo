'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function AuthButtons() {
  const { user } = useUser()

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
      {!user && (
        <>
          <Link href="/sign-in">
            <button className="bg-blue-800 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition rflex justify-center sm:justify-cente">
              Sign In
            </button>
          </Link>

          <Link href="/apply">
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-md shadow hover:bg-yellow-500 transition">
              Membership Request
            </button>
          </Link>
        </>
      )}

      {user && (
        <Link href="/profile">
          <button className="bg-green-700 text-white px-6 py-2 rounded-md shadow hover:bg-green-600 transition">
            Profile
          </button>
        </Link>
      )}
    </div>
  )
}