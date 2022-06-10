import React from 'react';
import { ActivityIndicator } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import useLocation from '../hook/useRecordLocation';

const Map = () => {
    const { state: { currentLocation, locations }} =  useLocation();
    if( !currentLocation ) {
        return <ActivityIndicator size = "large" style = {{ marginTop: 200 }} />;
    }
    return (
        <MapView 
            style = {{ height: "50%", }} 
            initialRegion = {{ 
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            region = {{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle 
                center = { currentLocation.coords }
                radius = { 35 }
                strokeColor = "rgba(15,158,255,1.0)"
                fillColor = "rgba(15,158,255,0.3)"
            />
            <Polyline coordinates = { locations.map( loc => loc.coords )}
                        strokeWidth = { 3 }
                        geodesic = { true }
             /> 
        </MapView>
    );
};

export default Map;