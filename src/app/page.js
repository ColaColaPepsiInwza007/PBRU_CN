import Navbar from '../components/Navbar';
import FeaturedLocations from '../components/FeaturedLocations';
import SearchBar from '../components/SearchBar';
import Image from 'next/image'; 

export default function Home() {
  return (
    <div className="w-full h-screen p-4">
      <Navbar />
      <div className="mt-16 relative"> 
        <div className="hero-section w-full h-[300px] relative"> 
          <Image
            src="/pbru.jpg" 
            alt="PBRU Hero Image" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
          <div className="absolute bottom-4 left-4 w-full px-4"> {/* เพิ่ม px-4 */}
            <div className="max-w-[90%] mx-auto flex items-center"> {/* เพิ่ม flex items-center */}
              <SearchBar /> 
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-4">Find and share your location</h2>
        <p className="text-sm">Easily navigate to any building on campus.</p>
        <FeaturedLocations />
      </div>
    </div>
  );
}