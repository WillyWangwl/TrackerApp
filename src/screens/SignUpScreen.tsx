import React from 'react';
import { View, StyleSheet} from 'react-native';
import  useAuth  from '../hook/useAuth';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationName } from '../constants/navigationName';

const SignUpScreen = () => {
    const { user, signUp } = useAuth();

    return (
        <View style = { styles.container }>
            <AuthForm 
                    headerText = "Sign Up for Tracker" 
                    errorMessage = {user.errorMessage} 
                    submitButtonText = "Sign Up"
                    onSubmit = {({ email, password }) => signUp({ email, password } )}
            />
            <NavLink
                text = "Already have an account? Sign In instead"
                routeName = {NavigationName.SignInScreen} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: "30%"
    },

})

export default SignUpScreen;