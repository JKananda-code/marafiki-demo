import Image from 'next/image'
import myImage from '../public/kenya-canada.png';
export default function HeroImage() {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden rounded-lg shadow-md">

        <Image 
        src={myImage}
        alt="Canadian and Kenyan flags with Mount Kenya in the background"
        width={500}
        height={300} 
        />
    </div>
  )
}
