import useTrack from "./useTrack";
import useRecordLocation from "./useRecordLocation";
import { useNavigation } from '@react-navigation/native';
import { NavigationName } from "../constants/navigationName";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/AppStack'

type Screen  = StackNavigationProp<RootStackParamList>;

export default () => {
    const { createTrack } = useTrack();
    const { state: { name, locations }, reset } = useRecordLocation();
    const { navigate }  = useNavigation<Screen>()

    const saveTrack = async () => {
        await createTrack( name, locations );
        reset();
        navigate( NavigationName.TrackListFlow )
    }

    return { saveTrack };

}