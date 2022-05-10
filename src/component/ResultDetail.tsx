import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Results } from '../reducer/Result';

type Props = {
    result : Results;
}

const ResultDetail:React.FC<Props> = ( {result} ) => {
   const { image_url, name, rating, review_count } = result;
    
    return (
        <View style = { styles.container } >
            <Image source = { {uri:image_url  } } style = { styles.image } />
            <Text style = { styles.name } >{ name }</Text>
            <Text>{(rating)} Stars, {review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: '800',
        marginBottom: 5
    }
    
});

export default ResultDetail; 