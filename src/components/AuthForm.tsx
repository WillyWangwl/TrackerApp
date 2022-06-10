import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Spacer  from './Spacer';
import  useAuth, { User }  from '../hook/useAuth';

type Props = {
    headerText: string;
    errorMessage: string; 
    submitButtonText: string;
    onSubmit: ({ email, password}:User)  => Promise<void>
}

const AuthForm:React.FC<Props> = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const { setOptions } = useNavigation();
    const [ email , setEmail ] = useState( "" );
    const [ password , setPassword ] = useState ( "" );
    const { clearErrorMessage } = useAuth();


    useEffect( () => {
        setOptions({
            header: ()=> null
        });
    }, [] )

    useFocusEffect(
        useCallback( () => {
            setEmail("");
            setPassword("");
            clearErrorMessage();
        }, [] )    
    )

    return (
        <>
            <Spacer> 
                <Text h1>{headerText}</Text>
            </Spacer>
            <Spacer>
                <Input label = "Email"
                        value = { email }
                        onChangeText = { setEmail }
                        autoCapitalize = 'none'
                        autoCorrect = { false } 
                        autoCompleteType = { undefined } 
                />
                <Spacer />
                <Input label = "Password" 
                        value = { password }
                        onChangeText = { setPassword }
                        secureTextEntry
                        autoCapitalize = 'none'
                        autoCorrect = { false } 
                        autoCompleteType = { undefined } 
                />
            </Spacer>
            <Text style = { styles.errorMessage } >
                {errorMessage ?? "" }
            </Text> 
            <Spacer>
                <Button title = { submitButtonText }
                        onPress = { () => onSubmit( { email, password }) }
                />
            </Spacer>
        </>
        
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        height:30,
        fontSize: 16,
        color: "red",
        marginHorizontal: 15,
        marginBottom: -10,
        marginTop: -30,
    },
})

export default AuthForm;