export default function MembersListPage() {
  const members = [
    { name: 'Dan Mugo', role: 'Founder & Treasurer' },
    { name: 'Wycliffe Oduor', role: 'Founder & Events Coordinator' },
    { name: 'Sister Njeri', role: 'Founder & Spiritual Advisor' },
    { name: 'Grace Mwangi', role: 'Communications Lead' },
    { name: 'Peter Kamau', role: 'Youth Liaison' },
    { name: 'Jane Wanjiku', role: 'Membership Secretary' },
  ]

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900">Registered Members</h2>
      <p className="text-gray-700">
        Below is a sample list of Marafiki members. This section will eventually include full member profiles and contact details for internal use.
      </p>

      <ul className="divide-y divide-gray-200">
        {members.map((member, index) => (
          <li key={index} className="py-3">
            <p className="font-semibold text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-500">{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
