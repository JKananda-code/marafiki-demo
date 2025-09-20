import HeroImage from '../components/HeroImage'

export default function HomePage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <HeroImage />

      <h1 className="text-3xl font-bold text-center text-blue-900 mt-4">
        Welcome to Marafiki Association
      </h1>
      <p className="text-center text-gray-700">
        A community of Kenyans in Canada united by heritage, support, and shared purpose.
      </p>
    </div>
  )
}
