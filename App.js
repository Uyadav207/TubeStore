import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, TabRouter } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Constant from 'expo-constants';
import VideoPlayer from "./src/screens/VideoPlayer";
// import subscribe from "./src/screens/Subscribe";
import Explore from "./src/screens/Explore";
import Search from "./src/screens/Search"
import Home from './src/screens/Home'
import { MaterialIcons } from "@expo/vector-icons";
import { reducer } from './src/reducers/reducer';
import { themeReducer } from './src/reducers/themeReducer'
import { Provider, useSelector } from "react-redux";
import { createStore, combineReducers } from 'redux';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#151C22",
    iconColor: "#5875FF",
    backColor: "#0F141A"
  }
}
const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "#ddd",
    iconColor: "black",
    backColor: "#eee"

  }
}

const rootReducer = combineReducers({
  cardData: reducer,
  myDarkMode: themeReducer
})
const store = createStore(rootReducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          }
          return <MaterialIcons name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E85075',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />

    </Tabs.Navigator>
  )
}
export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

  )
}
export function Navigation() {

  let currTheme = useSelector(state => {
    return state.myDarkMode
  })

  return (
    <Provider store={store} >
      <NavigationContainer theme={!currTheme ? customDarkTheme : customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

