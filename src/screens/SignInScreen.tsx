import React from 'react';
import { View, StyleSheet } from 'react-native';
import  useAuth  from '../hook/useAuth';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationName } from '../constants/navigationName';

const SignInScreen = () => {
    const { user, signIn } = useAuth();
    
    return (
        <View style = { styles.container }>
            <AuthForm 
                    headerText = "Sign In to Your Account" 
                    errorMessage = { user.errorMessage } 
                    submitButtonText = "Sign In"
                    onSubmit = {({ email, password }) => signIn({ email, password } )}
            />
            <NavLink
                text = "Already have an account? Sign In instead"
                routeName = { NavigationName.SignUpScreen } 
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
});

export default SignInScreen;