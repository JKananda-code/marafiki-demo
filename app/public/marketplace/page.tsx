import ProductCard from '../../components/ProductCard';

export default function MarketplacePage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800">Marketplace</h2>
      <p className="text-gray-700">
        Browse products and services offered by Marafiki members. Support local talent and community entrepreneurship!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductCard
          title="Authentic Kenyan Beaded Jewelry"
          description="Handcrafted necklaces and bracelets made with traditional Maasai beads. Perfect for gifts or cultural events."
          price="$25–$60"
          seller="Mama Njeri"
          contact="njeri.jewels@example.com"
        />

        <ProductCard
          title="Swahili Catering Services"
          description="Delicious Kenyan dishes for parties, weddings, and community events. Menu includes pilau, chapati, samosas, and more."
          price="Custom pricing"
          seller="Chef Wycliffe"
          contact="wycliffe.catering@example.com"
        />

        <ProductCard
          title="Math & Science Tutoring"
          description="One-on-one tutoring for high school students. Focus on STEM subjects with flexible scheduling."
          price="$30/hr"
          seller="Dan Mugo"
          contact="dan.tutor@example.com"
        />
      </div>
    </div>
  )
}
