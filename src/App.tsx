import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SearchScreen from "./screen/SearchScreen";
import ResultShowScreen from "./screen/ResultShowScreen";
import React, { ReactElement } from "react";

export type RootStackParamList = {
  SearchScreen : undefined;
  ResultShowScreen: { name: string };
}
const Stack = createStackNavigator<RootStackParamList>();

const App = ():ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"SearchScreen"} >
        <Stack.Screen name = "SearchScreen"
                      component = { SearchScreen }
                      options = {{
                        title: "Restaurant"
                      }}
        />
        <Stack.Screen name = "ResultShowScreen"
                      component = { ResultShowScreen }
                      options = { ( { route } ) => ( { title: route.params?.name } ) }

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;