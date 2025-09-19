import MemberProfileCard from '../../../components/MemberProfileCard'

export default function MembersListPage() {
  const members = [
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
  ]

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900">Member Profiles</h2>
      <p className="text-gray-700">Meet the people who make Marafiki thrive.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <MemberProfileCard key={index} {...member} />
        ))}
      </div>
    </div>
  )
}
