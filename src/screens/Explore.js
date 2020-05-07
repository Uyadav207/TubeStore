import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Constant from "expo-constants"
import Header from "../components/Header"
import { TextInput } from 'react-native-gesture-handler';
import Card from "../components/Card";
import {useSelector} from "react-redux";

const LittleCard = ({name}) =>{
    
    return (
        <View style={{
            backgroundColor:"red",
            height:50,
            width:180,
            borderRadius:"50%",
            marginTop:10
        }}>
        <Text style={{
            textAlign: "center",
            color:"white",
            marginTop:10,
            fontSize:22
        }}>
        {name}
        </Text>
        </View>
    )
}

const Explore = () =>{
    const cardData = useSelector(state=>{
        return state
      })
    return (
        <View style={{
        flex:1,
        marginTop:Constant.statusBarHeight
        }}>
        <Header />
        <View style={{
            flexDirection:"row"
            ,flexWrap:"wrap",
            justifyContent:"space-around"
        }}>
            <LittleCard name="Gaming" />
            <LittleCard name="Entertainment" />
            <LittleCard name="Learning" />
            <LittleCard name="Music" />
            <LittleCard name="Trending" />
            <LittleCard name="News" />
        </View>
        <Text style={{
            margin:8,
            fontSize:22,
            borderBottomWidth:1
        }}>
       Trending Videos
        </Text>
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
    )
}
export default Explore