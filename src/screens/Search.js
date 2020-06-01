import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import Constant from "expo-constants"
import {useSelector, useDispatch} from "react-redux";
import {useTheme} from "@react-navigation/native";
import { API_KEY } from 'react-native-dotenv'
 




const SearchScreen = ({navigation}) => {
    const {colors} = useTheme()
  const mycolor = colors.iconColor
    const [value,setValue] = useState("")
    const dispatch = useDispatch()
    const miniCardData = useSelector(state=>{
        return state.cardData
    })
    const [loading,setLoading] = useState(false)
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
            //  console.log(data.items);
             
            setLoading(false)
            dispatch({type:"add", payload:data.items})
        })
    }
    return (
       <View style = {{
       flex:1,
       marginTop:Constant.statusBarHeight+10
       }}>
            <View style={{
                padding:5,
                flexDirection:"row",
                justifyContent: "space-around",
                elevation: 4,
                backgroundColor:colors.headerColor
            }}>
                <Ionicons name="md-arrow-back" size={32}
                        onPress={()=>navigation.goBack()}   
                        style={{color:mycolor}}             />
                <TextInput
                    style = {{
                        width:"70%",
                        backgroundColor:"#e6e6e6",
                        borderRadius: 50,
                        height: 36,
                        paddingLeft:"3%",
                        textAlignVertical: 'top'
                        }}
                    placeholder={'Start Typing...'}
                    underlineColorAndroid={'transparent'}
                    autoCorrect={true} autoFocus={true}
                    autoCapitalize={'sentences'}
                    value = {value}
                    onChangeText = {(text)=>setValue(text)}
                />
                <Ionicons 
                    name = "md-send"
                    size = {32}
                    onPress={()=>fetchData()}
                    style={{color:mycolor}}   
                />
            </View>
            {loading ? <ActivityIndicator style={{marginTop:10}} size="large" color= {'grey'}/>: null}
            <FlatList
            data = {miniCardData}
            renderItem = {({item})=>{
                return <MiniCard
                videoId = {item.id.videoId}
                title = {item.snippet.title}
                channel = {item.snippet.channelTitle}
                thumbnail= {item.snippet.thumbnails.high}
                description = {item.snippet.description}
                />
            }}
            KeyExtractor = {item=>item.id.videoId}
            />
       </View>
    )
}
export default SearchScreen