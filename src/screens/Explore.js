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
            backgroundColor:"#E85075",
            height:50,
            width:180,
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

const Explore = (props) =>{
    const cardData = useSelector(state=>{
        return state.cardData
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
            <LittleCard onPress={()=>{}} name="Gaming" />
            <LittleCard onPress={()=>{}} name="Entertainment" />
            <LittleCard onPress={()=>{}} name="Learning" />
            <LittleCard onPress={()=>{}} name="Music" />
            <LittleCard onPress={()=>{}} name="Trending" />
            <LittleCard onPress={()=>{}} name="News" />
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