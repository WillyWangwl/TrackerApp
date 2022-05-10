import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../component/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../component/ResultList';

const SearchScreen = () => {
    const [ term, setTerm ] = useState("");
    const { searchApi, results, errorMessage }  = useResults()

    const filterResultsByPrice = ( price:string ) => {
        // price === "$" || "$$" || "$$$"
        return results.filter( item => {
            return item.price === price;
        })

    }

    return (
        <>  
            <SearchBar 
                term = {term} 
                onTermChange = { ( newTerm ) => setTerm( newTerm ) }
                onTermSubmit = { () => searchApi(term) } 
            />
            {
                errorMessage ? <Text style = { styles.errorMessage }>{errorMessage}</Text> :null

            }
            
            <ScrollView bounces = {false} style = { styles.container 
            } >
                <ResultList results = { filterResultsByPrice( "$" ) } title = "Cost Effective" />
                <ResultList results = { filterResultsByPrice( "$$" ) } title = "Bit Pricier" />
                <ResultList results = { filterResultsByPrice( "$$$" ) } title = "Big Spender" />
                <ResultList results = { filterResultsByPrice( "$$$$" ) } title = "High End" />
            </ScrollView>
        </>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    errorMessage: {
        color: "red",
        fontSize: 15,
    },
    message:{
        textAlign: 'center',
        fontSize: 18,
        padding: 10
    }
})

export default SearchScreen;