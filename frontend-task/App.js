import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen.js"
import TaskFormScreen from "./screens/TaskFormScreen.js"

const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;