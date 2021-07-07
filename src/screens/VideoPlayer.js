import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Constant from "expo-constants";
import { WebView } from 'react-native-webview';


const VideoPlayer = ({ route }) => {
    const { videoId, title, description } = route.params
    return (
        <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
            <View style={{
                width: "100%",
                height: 500
            }}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `http://www.youtube.com/embed/${videoId}` }}
                    scrollEnabled={false}
                    allowsFullscreenVideo={true}
                />
                <Text style={{
                    fontSize: 20,
                    width: Dimensions.get("screen").width - 50,
                    margin: 10
                }}
                    numberOfLines={2}

                >
                    {title}
                </Text>
                <View style={{ borderBottomWidth: 1 }} />
                <Text style={{
                    fontSize: 20,
                    width: Dimensions.get("screen").width - 50,
                    margin: 10
                }}
                    numberOfLines={1}

                >

                </Text>

            </View>
        </View>
    )
}

export default VideoPlayer;