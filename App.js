import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/components/Screens/LandingPage';
import HomePage from './src/components/Screens/HomePage';
import SignUp from './src/components/Screens/SignUp';
import Login from './src/components/Screens/Login';
import Verify from './src/components/Screens/Verify';
import Search from './src/components/BottomTabs/Search';
import Setting from './src/components/BottomTabs/Setting';
import Home from './src/components/BottomTabs/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomePage' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Search" component={Search} />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App