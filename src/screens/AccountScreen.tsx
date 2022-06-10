import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import useAuth from '../hook/useAuth';

const AccountScreen = () => {
    const { signOut } = useAuth();
    return (
        <SafeAreaView>
            <Text style = {{ fontSize: 48 }}>Account Screen</Text>
            <Spacer>
                <Button title = "Sign Out" onPress={ signOut }  />
            </Spacer>
        </SafeAreaView>
    );
};

export default AccountScreen;