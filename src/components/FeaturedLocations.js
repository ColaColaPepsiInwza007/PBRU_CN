import Image from 'next/image';

const FeaturedLocations = () => {
  // ข้อมูลสถานที่แนะนำ
  const locations = [
    {
      name: "Library",
      image: "/library.jpg", // รูปภาพต้องอยู่ใน `public/`
      link: "/map?place=Library"
    },
    {
      name: "Cafeteria",
      image: "/cafeteria.jpg",
      link: "/map?place=Cafeteria"
    },
    {
      name: "School",
      image: "/school.jpg",
      link: "/map?place=School"
    }
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Featured Locations</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {locations.map((loc, index) => (
          <a key={index} href={loc.link} className="flex flex-col items-center">
            <div className="w-24 h-24 relative">
              <Image 
                src={loc.image} 
                alt={loc.name} 
                layout="fill" 
                className="rounded-md" 
                placeholder="blur" 
                blurDataURL={loc.image} 
                loading="lazy"
              />
            </div>
            <p className="mt-1 text-sm">{loc.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLocations;