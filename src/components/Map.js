'use client';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect } from 'react';

const containerStyle = {
  width: "100%",
  height: "500px", // ตั้งค่าความสูงของแผนที่
};

const center = {
  lat: 13.06951, // ตำแหน่งของมหาวิทยาลัยราชภัฏเพชรบุรี
  lng: 99.97561,
};

const schoolLocation = {
  lat: 13.07029, // ตำแหน่งของ "โรงเรียนสาธิตมหาวิทยาลัยราชภัฏเพชรบุรี"
  lng: 99.98027,
};

export default function Map() { 
  const [map, setMap] = useState(null);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // This will run only once after the component is mounted in the browser
    // You can access browser-specific objects like window or document here
  },); // The empty dependency array ensures this runs only once

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={(map) => setMap(map)}
      >
        {/* มาร์คจุดมหาวิทยาลัยราชภัฏเพชรบุรี */}
        <Marker position={center} label="PBRU" />

        {/* มาร์คจุดโรงเรียนสาธิต */}
        <Marker position={schoolLocation} label="School" />
      </GoogleMap>
    </LoadScript>
  );
}