import AnnouncementCard from '../../../components/AnnouncementCard'

export default function MatangazoPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800">Matangazo Newsletter</h2>
      <p className="text-gray-700">
        Welcome to Matangazo—your source for community updates, initiatives, and shared moments.
      </p>

      <div className="space-y-4">
        <AnnouncementCard
          title="Youth Meet-Up Event Announced"
          date="September 18, 2025"
          summary="The Chairman has announced a Kenyan Youth Meet-Up Event scheduled for August 30th. The event will focus on career planning, mental health, substance abuse, and community belonging. Youth aged 13–25 are encouraged to attend."
          author="Chairman, Marafiki Association"
        />

        <AnnouncementCard
          title="Marketplace Launch"
          date="September 10, 2025"
          summary="Members can now list their products and services in the new Marketplace section. This initiative aims to support entrepreneurship and strengthen economic ties within our community."
        />

        <AnnouncementCard
          title="New Members Welcomed"
          date="September 1, 2025"
          summary="We are pleased to welcome 12 new members to the Marafiki Association. Their commitment to community support and shared values enriches our collective strength."
        />
      </div>
    </div>
  )
}
