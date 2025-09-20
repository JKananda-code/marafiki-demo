import DashboardCard from '../../components/DashboardCard'

export default function MembersDashboard() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900">Members Dashboard</h2>
      <p className="text-gray-700">
        Welcome, Marafiki member. Access internal resources and updates below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardCard
          title="Constitution & Byelaws"
          description="Review the guiding principles and legal framework of the association."
          href="/members/constitution"
        />
        <DashboardCard
          title="Members List"
          description="View the current list of registered members."
          href="/members/members-list"
        />
        <DashboardCard
          title="Treasurer’s Narrative Report"
          description="Read updates and summaries from the Treasurer."
          href="/members/treasurer-report"
        />
        <DashboardCard
          title="Tech Committee"
          description="Oversight of website content and editorial policy."
          href="/members/committees/tech"
/>

      </div>
    </div>
  )
}
