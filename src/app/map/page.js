// app/map/page.js
'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'; // Import Navbar

const MapPage = () => {
  const searchParams = useSearchParams();
  const place = searchParams.get('place') ?? "";  // Provide a default value
  const [location, setLocation] = useState(null);

  // *** locations อยู่ภายใน component เหมือนเดิม ***
  const locations = {
    'Library': {
        lat: 13.071264340860376,
        lng: 99.97832320796364,
        address: '38 หมู่ 8 ถนน หาดเจ้าสำราญ ตำบล นารุ่ง อำเภอเมืองเพชรบุรี 76000',
        openingHours: '8:00 AM - 4:30 PM'
    },
    'Cafeteria': {
        lat: 13.072174235444233,
        lng: 99.9774306303268,
        address: '38 หมู่ 8 ถนน หาดเจ้าสำราญ ตำบล นารุ่ง อำเภอเมืองเพชรบุรี 76000',
        openingHours: '11:30 AM - 4:30 PM'
    },
    'School': {
        lat: 13.070316125743933,
        lng: 99.98027142063673,
        address: '38 หมู่ 8 ถนน หาดเจ้าสำราญ ตำบล นารุ่ง อำเภอเมืองเพชรบุรี 76000',
        openingHours: '8:30 AM - 4:30 PM'
    }
  };

  useEffect(() => {
    // *** ใช้ hasOwnProperty เพื่อตรวจสอบ key ***
    if (place && locations.hasOwnProperty(place)) {
      setLocation(locations[place]);
    } else {
      setLocation(null);
    }
  }, [place]);


  const mapSrc = location
    ? `https://maps.google.com/maps?q=${encodeURIComponent(location.lat)},${encodeURIComponent(location.lng)}&z=15&output=embed`
    : '';

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      {location ? (
        <>
           {/* Wrap iframe and location info in a div with centering styles */}
          <div className="flex-grow flex flex-col items-center justify-center">
              <iframe
                width="100%"
                height="450px"
                loading="lazy"
                allowFullScreen
                src={mapSrc}
                className="max-w-3xl"
                >
              </iframe>


            <div className="p-4 max-w-3xl w-full">
              <h1 className="text-lg font-bold">{place}</h1>
              <p>เวลาทำการ: {location.openingHours}</p>
              <p>ที่อยู่: {location.address}</p>
            </div>

            <div className="mt-4 flex justify-center">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.lat)},${encodeURIComponent(location.lng)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Get directions
              </a>
            </div>
          </div>

        </>
      ) : (
        <p className="text-center p-4">Location not found.</p>
      )}
    </div>
  );
};

export default MapPage;