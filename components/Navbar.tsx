'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const membersLink = { label: 'Members', href: '/members' }

  const publicLinks = [
    { label: 'Dashboard', href: '/public' },
    { label: 'Matangazo', href: '/public/matangazo' },
    { label: 'Marketplace', href: '/public/marketplace' },
    { label: 'Chairman', href: '/public/chairman-announcements' },
    { label: 'Archive', href: '/public/archive' },
    { label: 'About', href: '/public/about' },
    { label: 'Contact', href: '/public/contact' },
  ]

  return (
    <nav className="bg-blue-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Marafiki</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href={membersLink.href}
            className={`hover:underline ${
              pathname.startsWith(membersLink.href) ? 'font-semibold underline' : ''
            }`}
          >
            {membersLink.label}
          </Link>

          <div className="relative">
            <button
              className="flex items-center gap-1 hover:underline"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Public <ChevronDownIcon className="h-4 w-4" />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-blue-900 shadow-lg rounded w-48 z-10">
                {publicLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 hover:bg-blue-100 ${
                        pathname === item.href ? 'font-semibold underline' : ''
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>
            <Link
              href={membersLink.href}
              className={`block px-2 py-1 rounded hover:bg-blue-800 ${
                pathname.startsWith(membersLink.href) ? 'font-semibold underline' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {membersLink.label}
            </Link>
          </li>
          {publicLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-2 py-1 rounded hover:bg-blue-800 ${
                  pathname === item.href ? 'font-semibold underline' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
