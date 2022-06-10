import { useRecoilState } from 'recoil';
import { locationState } from '../Recoil/state';
import { Location } from '../type/commonType';

export default () => {
    const [ state , setState ] = useRecoilState( locationState );

    const startRecording = ():void => {
        setState({ ...state, recording:true });
    }

    const stopRecording = ():void => {
        setState({ ...state, recording:false });
    }
    
    const addLocation = ( location:Location, recording:boolean ):void => {
        if( recording ){
            setState( ( state ) => { return { ...state, locations:[ ...state.locations, location ], currentLocation: location }})
        } else {
            setState( ( state ) => { return { ...state, currentLocation: location }})
        }
    }
    const changeName = ( name:string ):void => {
        
        setState( ( state )=>{ return { ...state, name: name }});
    }

    const reset = ():void =>{
        setState({ ...state, name: "", locations: [] });
    }

    return { state , startRecording, stopRecording ,addLocation, changeName, reset };
}