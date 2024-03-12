import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    window.initMap = () => {
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    };

    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%', minHeight: '300px' }}></div>;
};

export default Map;
