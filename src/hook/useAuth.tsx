import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { useRecoilState } from 'recoil';
import { userAuth } from '../Recoil/state';
import trackerApi from '../api/tracker'

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/AppStack';
import { NavigationName } from '../constants/navigationName';

type Screen = StackNavigationProp<RootStackParamList>

export type User = {
    email: string;
    password: string;
}

export default () => {
    const [ user , setUser ] = useRecoilState( userAuth );
    const { navigate } = useNavigation<Screen>();

    const tryLocalSignIn = async () => {
        const token = await AsyncStorage.getItem( 'token' );
        if( token ) {
            setUser({ errorMessage: "", token: token })
            navigate( NavigationName.Dashboard )
        } else {
             navigate( NavigationName.SignUpScreen )
        }
    };

    const signUp = async ({ email , password }:User ):Promise<void> => {
        try {
            const response = await trackerApi.post( '/signUp', { email, password });
            await AsyncStorage.setItem( 'token', response.data.token );
            setUser({ errorMessage: "", token: response.data.token })
            navigate( NavigationName.Dashboard )
        } catch ( err ) {
            setUser( { ...user, errorMessage: "Something went wrong with sign up" });
        }
    };

    const signIn = async ({ email , password }:User ):Promise<void> => {
        try {
            const response = await trackerApi.post( '/signIn', { email, password } );
            await AsyncStorage.setItem( 'token', response.data.token );
            setUser({ errorMessage: "", token: response.data.token })
            navigate( NavigationName.Dashboard )
        } catch ( err ) {
            setUser( { ...user, errorMessage: "Something went wrong with sign in" });
        }
    }

    const signOut = async () => {
        await AsyncStorage.removeItem('token');
        setUser({ token: "", errorMessage:"" })
        navigate( NavigationName.SignUpScreen )
    }

    const clearErrorMessage = () => {
        setUser({ ...user, errorMessage: "" })
    }

    return { user , signIn, signUp, signOut, clearErrorMessage, tryLocalSignIn }
}