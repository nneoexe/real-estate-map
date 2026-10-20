'use client';

import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react";

type Property = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

const properties: Property[] = [
  {
    id: 1,
    name: "Property One",
    address: "123 Main Street",
    latitude: 40.7484,
    longitude: -73.9857,
  },
  {
    id: 2,
    name: "Property Two",
    address: "456 Broadway",
    latitude: 40.7527,
    longitude: -73.9772,
  },
];

export default function MapView() {
  const [selectedProperty, setSelectedProperty] =
  useState<Property | null>(null);

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{ 
        latitude: 40.7484,
        longitude: -73.9857, 
        zoom: 15 
    }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ width: '100%', height: '100%' }}
    >
        {properties.map((property) => (
        <Marker
            key={property.id}
            latitude={property.latitude}
            longitude={property.longitude}
            anchor="bottom"
            onClick={(event) => {
            event.originalEvent.stopPropagation();
            setSelectedProperty(property);
            }}
        >
            <button 
                type="button" 
                aria-label={`View ${property.name}`}
                className="h-12 w-12 cursor-pointer text-lg font-bold text-white "

            >
                📍
            </button>
        </Marker>
    ))}
    {selectedProperty && (
    <Popup
        latitude={selectedProperty.latitude}
        longitude={selectedProperty.longitude}
        anchor="top"
        closeOnClick={false}
        onClose={() => setSelectedProperty(null)}
    >
        <div>
        <h2>{selectedProperty.name}</h2>
        <p>{selectedProperty.address}</p>
        </div>
    </Popup>
    )}
    </Map>
  );
}