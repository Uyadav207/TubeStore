import React, { useState } from 'react';
import { Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import Constant from "expo-constants"
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";

import { SOME_KEY } from 'react-native-dotenv'

const SearchScreen = ({ navigation }) => {
    const { colors } = useTheme()
    const mycolor = colors.iconColor
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const miniCardData = useSelector(state => {
        return state.cardData
    })
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyCfmjjU_nnFOvOKsIZKz6_37wit9WXqCTI`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                dispatch({ type: "add", payload: data.items })
            })
    }
    return (
        <View style={{
            flex: 1,
            marginTop: Constant.statusBarHeight
        }}>
            <View style={{
                paddingVertical: 3,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 4,
                backgroundColor: colors.headerColor
            }}>
                <Ionicons name="md-arrow-back" size={32}
                    onPress={() => navigation.goBack()}
                    style={{ color: mycolor, paddingVertical:  5 }} />
                <TextInput
                    style={{
                        width: "70%",
                        backgroundColor: colors.headerColor,
                        borderRadius: 50,
                        height: 38,
                        paddingTop: 5,
                        paddingLeft: "2%",
                        textAlignVertical: 'top',
                        color: mycolor,
                        lineHeight: 20
                    }}
                    placeholder={'Start Typing...'}
                    underlineColorAndroid={'transparent'}
                    autoCorrect={false}
                    autoFocus={true}
                    autoCapitalize={'sentences'}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <Ionicons
                    name="md-send"
                    size={32}
                    onPress={() => fetchData()}
                    style={{ color: mycolor, paddingVertical: 5 }}
                />
            </View>
            {loading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color={'grey'} /> : null}
            <FlatList
                data={miniCardData}
                renderItem={({ item }) => {
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        thumbnail={item.snippet.thumbnails.high}
                        description={item.snippet.description}
                    />
                }}
                KeyExtractor={item => item.id.videoId}
            />
        </View>
    )
}
export default SearchScreen