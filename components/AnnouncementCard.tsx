interface AnnouncementCardProps {
  title: string
  date: string
  summary: string
  author?: string
}

export default function AnnouncementCard({ title, date, summary, author }: AnnouncementCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700">{summary}</p>
      {author && <p className="mt-2 text-sm text-gray-600 italic">— {author}</p>}
    </div>
  )
}
