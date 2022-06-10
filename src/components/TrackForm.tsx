import React from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import useRecordLocation from '../hook/useRecordLocation';
import useSaveTrack from '../hook/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording , locations },
            startRecording, 
            stopRecording, 
            changeName } = useRecordLocation();
    const { saveTrack } = useSaveTrack()

    return (
        <>
            <Spacer>
                <Spacer />
                <Input placeholder = 'Enter Name' 
                        autoCompleteType = { undefined } 
                        value = { name }
                        onChangeText = { changeName } 
                />
                <Spacer>
                    { recording 
                        ? <Button title = "Stop" onPress = { stopRecording }/>
                        : <Button title = "Start Recording" onPress = { startRecording }/>
                    }
                </Spacer>
                <Spacer>
                    { !recording && locations.length
                        ? <Button title = "Save Recording" 
                                    onPress = { saveTrack }
                            />
                        : null
                    }
                </Spacer>
            </Spacer>
        </>
    );
};

export default TrackForm;