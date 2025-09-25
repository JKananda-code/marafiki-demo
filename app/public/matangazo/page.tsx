import AnnouncementCard from '../../../components/AnnouncementCard'

export default function MatangazoPage() {
  return (
  
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800">Matangazo Newsletter</h2>
      <p className="text-gray-700">
        Welcome to Matangazo—your source for community updates, initiatives, and shared moments.
      </p>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm mb-6">
      <div className="flex items-center gap-3">
        <span className="text-yellow-500 text-xl">⚖️</span>
        <h3 className="text-lg font-semibold text-yellow-800">Chairman’s Message: Civility in Discourse</h3>
      </div>
    </div>

<div className="space-y-4 text-gray-800">
  <p><strong>Reminder to All Matangazo Members</strong></p>

  <p>Humbly allow me to share the history of this Forum and how it came to be, for the benefit of those who may not be familiar with its origins.</p>

  <p>This Forum was formed to allow for free and respectful discourse among Marafiki Bereavement Support Group Members. Originally, it was intended for Marafiki Members only—and for a time, it remained so. The discourse was civil and polite, even when opinions differed. Respectful engagement was the norm.</p>

  <p>Over time, it became clear that some of our Kenyan family were being left out of the conversation. Out of a desire for unity, inclusivity, and concern for one another, the Forum was opened to the entire Kenyan community. It has since become a place where Kenyans gather to freely exchange ideas and connect.</p>

  <p>However, the original vision of civil and polite conduct now seems to need reaffirming.</p>

  <p>Just as the free society we live in has rules of conduct and behavior, so too does Marafiki Matangazo. We uphold rules of civility and decorum, and these are expected of everyone.</p>

  <ul className="list-disc pl-5 space-y-2">
    <li>We must be civil and avoid personal attacks or inappropriate language.</li>
    <li>Free exchange of ideas and respectful questioning of opinions is welcome.</li>
    <li>Personal attacks are not.</li>
    <li>Engage the subject matter—not the person sharing the opinion.</li>
  </ul>

  <p>As we continue to share ideas and engage in discussion, let us remember to keep our interactions civil, respectful, and polite. Healthy debate is encouraged, but insults or disrespectful language will not be tolerated.</p>

  <p>A reminder as well of the importance of moderation—both in content and volume—and exercising discretion when posting.</p>

  <p>It has taken many years to build this Forum into a space where we all feel welcome, respected, and at home. It takes a long time to build something good—but a very short time to break it.</p>

  <p><strong>Please, let us work together to ensure this Forum remains a positive and welcoming space for everyone.</strong></p>

  <p className="italic text-gray-600">—Chairman, Marafiki Association</p>
</div>

<h1 className=" Content above was posted by Chairman in Whatsup Group but what is below is Dummy"> </h1>

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
