import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Constant from 'expo-constants';
import VideoPlayer from "./src/screens/VideoPlayer";
import subscribe from "./src/screens/Subscribe";
import Explore from "./src/screens/Explore";
import Search from "./src/screens/Search"
import Home from './src/screens/Home'
import {MaterialIcons} from "@expo/vector-icons";
import { reducer } from './src/reducers/reducer';

import {Provider} from "react-redux";
import {createStore} from 'redux';

const customDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor: "#1e1e1e",
    iconColor:"white"
  }
}
const customDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor:"black"
  }
}

const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome=()=>{
  return (
    <Tabs.Navigator
     screenOptions={({ route }) => ({
          tabBarIcon: ({color }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = 'home';
            } else if (route.name === 'explore') {
              iconName = 'explore';
            }else if(route.name === 'subscribe') {
               iconName= 'subscriptions';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#d63447',
          inactiveTintColor: 'gray',
        }}
    >
      <Tabs.Screen name = "home" component={Home} />
      <Tabs.Screen name = "explore" component={Explore} />
      <Tabs.Screen name = "subscribe" component={subscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store} > 
    <NavigationContainer theme={customDarkTheme}>
    <Stack.Navigator headerMode="none">
    <Stack.Screen name = "Home" component={RootHome} />
    <Stack.Screen name = "search" component={Search} />
    <Stack.Screen name = "videoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
   </NavigationContainer>
  </Provider>
  );
}

