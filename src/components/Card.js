import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from "@react-navigation/native"


const Card = (props) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const textColor = colors.iconColor;
    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoPlayer", { videoId: props.videoId, title: props.title })}>
            <View style={{
                elevation: 7,
                marginHorizontal: 5,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            }}

            >
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={{
                        width: "100%",
                        height: 200,
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    padding: 10,
                }}>
                    <MaterialIcons style={{ marginTop: 2, color: textColor, marginLeft: 3 }} name="account-circle" size={40} />
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 20,
                            width: Dimensions.get("screen").width - 100,
                            padding: 2,
                            color: textColor
                        }}
                            ellipsizeMode="tail"
                            numberOfLines={2}
                        >{props.title}</Text>
                        <Text style={{
                            width: Dimensions.get("screen").width / 2 + 19,
                            padding: 2,
                            color: "gray"
                        }}>{props.channel}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card