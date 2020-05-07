import React from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList  } from 'react-native';
import Header from '../components/Header';
import Card from "../components/Card";
import {useSelector} from "react-redux";
import Constant from 'expo-constants';

export default function HomeScreen({navigation}) {
  const cardData = useSelector(state=>{
    return state
  })
  return (
    <View style={{flex:1,
    marginTop:Constant.statusBarHeight,
    }}>
    <Header />
    <FlatList
      data={cardData}
      renderItem = {({item})=>{
       return <Card
                videoId = {item.id.videoId}
                title = {item.snippet.title}
                channel = {item.snippet.channelTitle}
                />
      }}
      
      KeyExtractor = {item=>item.id.videoId}

    />
    </View>
  );
}

