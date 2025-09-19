
interface ProductCardProps {
  title: string
  description: string
  price?: string
  seller: string
  contact: string
}

export default function ProductCard({ title, description, price, seller, contact }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      {price && <p className="text-sm text-gray-600 mb-1">Price: {price}</p>}
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500">Seller: {seller}</p>
      <p className="text-sm text-blue-700">Contact: {contact}</p>
    </div>
  )
}
