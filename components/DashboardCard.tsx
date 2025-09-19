import Link from 'next/link'

interface DashboardCardProps {
  title: string
  description: string
  href: string
}

export default function DashboardCard({ title, description, href }: DashboardCardProps) {
  return (
    <Link href={href} className="block border rounded-lg p-4 shadow hover:shadow-md hover:border-blue-500 transition">
      <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </Link>
  )
}
