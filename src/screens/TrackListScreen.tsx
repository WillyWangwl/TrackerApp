import React, { useCallback, useEffect } from 'react';
import { Text, FlatList, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/AppStack';
import { NavigationName } from '../constants/navigationName';
import useTrackList from '../hook/useTrack'

type Screen = StackNavigationProp<RootStackParamList>


const TrackListScreen = () => {
    const { navigate, setOptions } = useNavigation<Screen>();
    const { trackList, fetchTracks } = useTrackList();

    useFocusEffect( 
        useCallback( ()=> {
            fetchTracks()
        }, [])
    )

    useEffect( () => {
        setOptions({ 
            headerTitle: "Tracks",
        })
    }, [])

    return (
        <>
            <FlatList 
                data = { trackList }
                keyExtractor = { ( item ) => item._id }
                renderItem = { ({ item }) => {
                    return ( 
                        <ListItem
                            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined} 
                            Component={ TouchableHighlight }
                            disabledStyle={{ opacity: 0.5 }}
                            onPress={() => navigate(NavigationName.TrackDetailScreen, { _id: item._id } )}
                            pad={20}
                            bottomDivider
                        >
                            <ListItem.Content>
                                <ListItem.Title>
                                <Text>{ item.name  }</Text>
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron
                                hasTVPreferredFocus={undefined} tvParallaxProperties={undefined} 
                                size={ 25 }
                            />
                        </ListItem>
                    )
                }}
            />
        </>
    );
};

export default TrackListScreen;