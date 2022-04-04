import React from 'react'
import {memo} from "react"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { MapKey } from '../../credentials/credentials';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -12.00808646119056,
  lng: -77.08332341063173
};
const position = {
    lat: -12.00808646119056,
    lng: -77.08332341063173
}
const onLoad = marker => {
    console.log('marker: ', marker)
}
function MyMap() {
    
  return (
    <LoadScript
      googleMapsApiKey= {MapKey.mapsKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker
            onLoad={onLoad}
            position={position}
        />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default memo(MyMap)