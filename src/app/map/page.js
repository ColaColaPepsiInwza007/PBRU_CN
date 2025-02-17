'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const MapPage = () => {
  const searchParams = useSearchParams();
  const place = searchParams.get('place');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (place) {
      // ดึงข้อมูลสถานที่จาก Google Maps API (หรือใช้ database ของเรา)
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

      setLocation(locations[place] || null);
    }
  }, [place]);

  // ตรวจสอบว่า location มีค่าก่อนที่จะพยายามเข้าถึง location.lat และ location.lng
  const mapSrc = location
  ? `https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`
  : '';

  return (
    <div className="w-full h-screen">
      {/* ส่วนหัว */}
      {location && (
        <div className="p-4"> {/* เพิ่ม div เพื่อจัดกลุ่ม */}
          <h1 className="text-lg font-bold">{place}</h1>
          <p>เวลาทำการ: {location.openingHours}</p>
          <p>ที่อยู่: {location.address}</p>
        </div>
      )}

      {/* แผนที่ */}
      {location? (
        <iframe
          width="100%"
          height="45%"  
          loading="lazy"
          allowFullScreen
          src={mapSrc} // ใช้ mapSrc ที่สร้างขึ้น
        ></iframe>
      ): (
        <p className="text-center p-4">Location not found.</p>
      )}

      {/* ปุ่มนำทาง */}
      {location && (
        <div className="mt-4 flex justify-center"> {/* จัดตำแหน่งปุ่ม */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Get directions
          </a>
        </div>
      )}
    </div>
  );
};

export default MapPage;