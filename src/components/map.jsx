import React, { useEffect } from 'react';

const Map = ({ latitude, longitude }) => {
  useEffect(() => {
    window.initMap = () => {
      var mapProp = {
        center: new window.google.maps.LatLng(latitude, longitude),
        zoom: 15,
      };
      var map = new window.google.maps.Map(
        document.getElementById('googleMap'),
        mapProp
      );

      // Create a marker at the specified latitude and longitude
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(latitude, longitude),
        map: map,
        // title: 'Your Marker Title', // You can set a title for the marker
      });
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=initMap`;
    script.async = true;
    script.defer = true;
    // script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, [latitude, longitude]);

  return (
    <div className="map_container">
      <div className="map">
        <div id="googleMap" style={{ height: '650px', width: '100%', marginTop: '20px', marginLeft:'10px'}}></div>
      </div>
    </div>
  );
};

export default Map;
