import "leaflet/dist/leaflet.css";
import { useRef } from 'react';
import mapData from '../app/data/countries.json'
//import { MapContainer } from 'react-leaflet';
import { GeoJSON, MapContainer } from './MapComponent';
import '../app/globals.css'

const Map = (props: any) => {

    const contryStyle = {
        fillColor: "silver",
        fillOpacity: 1,
        color: "white",
        weight: 1
    }

  const mapRef = useRef(null);
  const countries = mapData;

  /* TODO: Fix the Type error */
  return (
    <MapContainer
      ref={mapRef}
      center={[50.5, 30.5]}
      zoom={4}
      style={{ height: '100vh', zIndex: '0!important' }}
      touchZoom={false}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <GeoJSON data={countries.features} style={contryStyle} />
    </MapContainer>
  );
};

export default Map;