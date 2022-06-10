import { useRecoilState } from 'recoil';
import { tracks } from '../Recoil/state';
import trackerApi from '../api/tracker';
import { Location } from '../type/commonType';


export default () => {
    const [ trackList , setTrackList ] = useRecoilState( tracks )


    const fetchTracks = async () => {
        const response = await trackerApi.get( '/tracks' );
        setTrackList( response.data );

    }

    const createTrack = async ( name:string, locations:Location[] ) => {
        await trackerApi.post( '/tracks', { name, locations })
    }

    return { trackList, fetchTracks, createTrack };

}