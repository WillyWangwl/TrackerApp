import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Results } from '../reducer/Result';
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/App';

type ResultShowScreen = StackNavigationProp<RootStackParamList, "ResultShowScreen">

type Props = {
    title: string;
    results:Results[];
}

const ResultList:React.FC<Props> = ( { title, results } ) => {

    const { navigate } = useNavigation<ResultShowScreen>();
    // sort by rating
    results.sort( (a,b) => { return b.rating - a.rating  } )
    return (
        <View style = { styles.container } >
            <Text style = { styles.titleStyle } >{title} 
                <Text style = { {fontSize:12, marginLeft: 15}} > (Results : {results.length}) </Text>
            </Text>
            <FlatList 
                horizontal
                bounces = {false}
                data={results}
                showsHorizontalScrollIndicator = {false}
                keyExtractor = { (item:Results) => item.id }
                renderItem = { ( {item} ) => {
                    return (
                        <TouchableOpacity onPress = { () => navigate("ResultShowScreen", { name: item.name}) } >
                            <ResultDetail result = {item}/>
                        </TouchableOpacity>
                    )
                }}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }
    
})

export default ResultList;