import DashboardCard from '../../components/DashboardCard'

export default function PublicDashboard() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800">Public Dashboard</h2>
      <p className="text-gray-700">
        Explore Marafiki’s public resources, announcements, and community marketplace.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardCard
          title="Matangazo Newsletter"
          description="Stay updated with community news and announcements."
          href="/public/matangazo"
        />
        <DashboardCard
          title="Marketplace"
          description="Browse products and services offered by members."
          href="/public/marketplace"
        />
        <DashboardCard
          title="Chairman’s Announcements"
          description="Bereavements and official messages from the Chairman."
          href="/public/chairman-announcements"
        />
        <DashboardCard
          title="Archive"
          description="Preserve and explore Marafiki’s historical milestones."
          href="/public/archive"
        />
        <DashboardCard
          title="About Marafiki"
          description="Learn about our origins and mission."
          href="/public/about"
        />
        <DashboardCard
          title="Contact Us"
          description="Reach out to the Marafiki team for support or inquiries."
          href="/public/contact"
        />
      </div>
    </div>
  )
}
