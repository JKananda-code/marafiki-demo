export default function TechCommitteePage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900">Tech Committee</h2>

      <p className="text-gray-700">
        The Tech Committee is a specialized body appointed by the Board to oversee the digital integrity of the Marafiki Association.
      </p>

      <section>
        <h3 className="text-xl font-semibold text-gray-800">Mandate</h3>
        <p>
          On behalf of the Board, the Tech Committee shall take full responsibility for the organization and content of the Marafiki website. Their role is to ensure that all digital materials reflect the values, mission, and integrity of the Association.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800">Editorial Oversight</h3>
        <p>
          The Committee shall create and enforce an editorial policy that governs all published content. This includes:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reviewing and approving entries in the <strong>Matangazo Newsletter</strong></li>
          <li>Monitoring submissions to the <strong>Marketplace</strong></li>
          <li>Guiding content strategy for the <strong>Youth Engagement Page</strong></li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800">Accountability</h3>
        <p>
          The Tech Committee shall report directly to the Board and may recommend updates, removals, or improvements to any digital content. They are also empowered to advise on technical upgrades and platform security.
        </p>
      </section>
    </div>
  )
}
