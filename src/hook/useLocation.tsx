import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation'; 
import { Location } from '../type/commonType';

type UpdateLocation = (location:Location) => void

export default (isFocused:boolean, updateLocation:UpdateLocation) => {
    const [ err, setErr ] = useState("");
    const [ permission, setPermission] = useState( true );
    
    const startWatching = async () => {
        Geolocation.getCurrentPosition( 
            () => { setPermission( true )} ,
            ( error ) => { setErr( error.message ), setPermission( false ) }
        );
        if( !permission ) Geolocation.requestAuthorization() 
    }

    useEffect( () => {
        startWatching();
    }, [] );

    useEffect( () =>{ 
        let interval: NodeJS.Timer | null = null;
        if( isFocused ){
            interval = setInterval( () => {
                Geolocation.getCurrentPosition( 
                    ( position:Location ) => updateLocation( position ),
                    ( error ) => { setErr( error.message )},
                    { timeout: 100, enableHighAccuracy: true }
                );
            }, 1000 )
        } else {
            if( interval ) clearInterval( interval );
            interval = null;
        }
        return () => {
            if( interval ) clearInterval( interval );
            interval = null;
        }
    }, [ isFocused, updateLocation ] )

    return { err }
}