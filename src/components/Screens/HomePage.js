import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../BottomTabs/Home'
import Setting from '../BottomTabs/Setting';
import Search from '../BottomTabs/Search';
import Feather from 'react-native-vector-icons/Feather'

const Tab= createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false}} >
       <Tab.Screen name='Home' component={Home}
       options={{
        tabBarIcon:({focused})=>(
            <TouchableOpacity>
               <Feather name='home' size={30} color={'black'} /> 
            </TouchableOpacity>
        ),
    }}/>
       <Tab.Screen name='Search' component={Search}
       options={{
        tabBarIcon:({focused})=>(
            <TouchableOpacity>
               <Feather name='search' size={30} color={'black'} /> 
            </TouchableOpacity>
        ),
    }}/>
       <Tab.Screen name='Setting' component={Setting} options={{
           tabBarIcon:({focused})=>(
               <TouchableOpacity>
                  <Feather name='settings' size={30} color={'black'} /> 
               </TouchableOpacity>
           ),
       }}/>
   </Tab.Navigator>
  )
}

export default HomePage