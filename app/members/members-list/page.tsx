'use client'

import { useState } from 'react'
import MemberProfileCard from '../../../components/MemberProfileCard'

export default function MembersListPage() {
  const allMembers = [
    {
      name: 'Dan Mugo',
      role: 'Founder & Treasurer',
      bio: 'Dan has been instrumental in shaping the financial structure of Marafiki and mentoring youth in STEM.',
      email: 'dan.mugo@example.com',
    },
    {
      name: 'Wycliffe Oduor',
      role: 'Founder & Events Coordinator',
      bio: 'Wycliffe brings energy and vision to community events, ensuring every gathering is meaningful.',
      email: 'wycliffe.od@example.com',
    },
    {
      name: 'Sister Njeri',
      role: 'Founder & Spiritual Advisor',
      bio: 'A pillar of wisdom and compassion, Sister Njeri supports members through life’s transitions.',
    },
    {
      name: 'Grace Mwangi',
      role: 'Communications Lead',
      bio: 'Grace manages internal and external communications with clarity and warmth.',
      email: 'grace.m@example.com',
    },
    {
      name: 'Peter Kamau',
      role: 'Youth Liaison',
      bio: 'Peter connects with young members and helps organize mentorship events.',
    },
    {
      name: 'Jane Wanjiku',
      role: 'Membership Secretary',
      bio: 'Jane keeps our member records organized and up to date.',
    },
    // Add more members as needed
  ]

  const [query, setQuery] = useState('')

  const filteredMembers = allMembers.filter(member =>
    member.name.toLowerCase().includes(query.toLowerCase()) ||
    member.role.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900">Member Profiles</h2>
      <p className="text-gray-700">Search and explore our growing community of Marafiki members.</p>

      <input
        type="text"
        placeholder="Search by name or role..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full border rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, index) => (
            <MemberProfileCard key={index} {...member} />
          ))
        ) : (
          <p className="text-gray-500 col-span-2">No members found.</p>
        )}
      </div>
    </div>
  )
}
