import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import useRecordLocation from '../hook/useRecordLocation';
import useLocation from '../hook/useLocation';

const TrackCreateScreen = () => {
    const isFocused = useIsFocused();
    const { state: { recording }, addLocation } =  useRecordLocation();
    const callback = useCallback(  ( location )=>{ addLocation( location, recording )},
                                    [ recording ] );
    const { err } = useLocation( isFocused || recording, callback );

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            <Text>{ err ? err: " "}</Text>
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
})

export default TrackCreateScreen;