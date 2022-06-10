import React from 'react';
import { Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import useTrack from '../hook/useTrack'; 
import Spacer from '../components/Spacer'


type Props = { route:{ params: { _id: string }}}

const TrackDetailScreen:React.FC<Props> = ({ route }) => {
    const { trackList } = useTrack();
    const { _id } = route.params;

    const track = trackList.find( ( track ) => track._id === _id )
    if( !track ){
        return <Text style = {{ fontSize: 48}}>Something Went Wrong</Text>
    }
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text style = {{ fontSize: 48}}>{ track.name }</Text>
            <Spacer>
                <MapView style = {{ height: "90%", }}
                        initialRegion={{
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                            ...initialCoords,
                        }}
                >
                    <Polyline coordinates={track.locations.map( loc => loc.coords )}
                                strokeWidth = { 3 }
                                strokeColor = { "red" }
                                geodesic = { true }
                    />
                </MapView>
            </Spacer>
        </>
    );
};

export default TrackDetailScreen;