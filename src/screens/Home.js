import React from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList  } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import Card from "../components/Card";
import {AntDesign, Ionicons, MaterialIcons, Entypo} from '@expo/vector-icons';
import {useSelector} from "react-redux";
import Constant from 'expo-constants';
import {useNavigation, useTheme} from "@react-navigation/native";



export default function HomeScreen({navigation}) {
  const {colors} = useTheme()
    const mycolor = colors.iconColor
  const cardData = useSelector(state=>{
    return state
  })
  return (
    
    <View style={{flex:1,
    marginTop:Constant.statusBarHeight,
    backgroundColor:colors.headerColor
    }}>
<ScrollView>
<View style={{
  flexDirection:"row",
  height:60
}}>
        <Entypo style={{ 
          marginLeft:"5%",
          marginTop:24,
          flexDirection:"row",
          justifyContent: "space-around",
          width: 150,
          
          }} name="video" size={40} color = "red" />
        {/* <Text style={{
          fontSize: 22,
          marginLeft: 10,
          color: mycolor,
          fontWeight: "bold"
          }}>
      
        </Text> */}
        <Ionicons style={{
          marginLeft:"45%",
          marginTop:30,
          flexDirection:"row",
          justifyContent: "space-around",
          width: 150,
          }} 
          name="md-search" size={32} color={mycolor} 
          onPress={()=>navigation.navigate("search")}
        />        
            
            </View>
    
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
    </ScrollView>
    </View>
  );
}

