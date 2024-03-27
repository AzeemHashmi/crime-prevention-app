import React, { useEffect, useRef, useState } from 'react';

const Map = () => {
  const [locations, setLocations] = useState([]);
  const mapRef = useRef(null); // Ref to store the map instance

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (mapRef.current && locations.length > 0) {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=initMap`;
      window.initMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 52.629729, lng: -1.131592 },
          zoom: 12
        });

        // Add markers for each location
        locations.forEach(location => {
          new window.google.maps.Marker({
            position: {
              lat: parseFloat(location.location.latitude),
              lng: parseFloat(location.location.longitude)
            },
            map: map,
            title: location.category
          });
        });
      };
      document.body.appendChild(googleMapScript);

      return () => {
        document.body.removeChild(googleMapScript);
        delete window.initMap;
      };
    }
  }, [locations]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: '300px' }}></div>;
};

export default Map;
