import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/AppStack';


import Spacer from './Spacer';

type Screen = StackNavigationProp<RootStackParamList>;

type Props = {
    text: string;
    routeName: keyof RootStackParamList;
}

const NavLink:React.FC<Props> = ({ text, routeName }) => {
    const { navigate } = useNavigation<Screen>();
    return (
        <Spacer>
            <TouchableOpacity onPress={ ()=> navigate( routeName ) }>
                <Text style = { styles.link }>{ text }</Text>
            </TouchableOpacity>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "blue",
        fontSize: 16
    }
})

export default NavLink;