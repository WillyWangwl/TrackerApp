import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  FontAwesome5  from "react-native-vector-icons/FontAwesome5";

type Props = {
    term: string;
    onTermChange: (newTerm:string) => void;
    onTermSubmit: () => void;
}


const SearchBar:React.FC<Props> = ( { term, onTermChange, onTermSubmit } ) => {
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome5 
                name = "search" 
                style = { styles.iconStyle }
            />
            <TextInput 
                autoCapitalize = "none"
                autoCorrect = { false }
                placeholder='search'
                style = { styles.inputStyle }
                value = { term }
                onChangeText = { newTerm => onTermChange( newTerm ) }
                onEndEditing = { () => onTermSubmit() }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:15,
        backgroundColor: "#B0B0B0",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 15,
    },
    inputStyle: {
        flex:1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
    
})

export default SearchBar;