import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationName } from '../constants/navigationName';
import BottomTabStack from './BottomTabStack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';


export type RootStackParamList = {
    SignIn:undefined;
    SignUp:undefined;
    Dashboard:undefined;
    Account : undefined;
    TrackCreate : undefined;
    TrackDetail : { _id: string };
    TrackList : undefined;
    TrackListFlow: undefined;
    ResolveAuth: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = ():ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={NavigationName.ResolveAuthScreen}
                screenOptions={{ 
                    gestureEnabled: false,
                    headerLeft: () => null,
                    headerShown: false,
                }}>
                <Stack.Screen
                    name ={NavigationName.ResolveAuthScreen}
                    component = {ResolveAuthScreen}
                    options = {{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name ={NavigationName.SignInScreen}
                    component = {SignInScreen}
                />
                <Stack.Screen
                    name ={NavigationName.SignUpScreen}
                    component = {SignUpScreen}
                />
                <Stack.Screen
                    name ={NavigationName.Dashboard}
                    component = {BottomTabStack}
                    options = {{
                        title : ""
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default AppStack;
