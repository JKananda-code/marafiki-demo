interface MemberProfileCardProps {
  name: string
  role: string
  bio: string
  email?: string
}

export default function MemberProfileCard({ name, role, bio, email }: MemberProfileCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">{role}</p>
      <p className="text-gray-700 mb-2">{bio}</p>
      {email && (
        <p className="text-sm text-blue-700">
          Contact: <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </div>
  )
}
