import React from 'react';
import { StyleSheet, Text, View , Image, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation,useTheme} from "@react-navigation/native"


const MiniCard = (props) =>{
    const navigation =useNavigation();
    const {colors} = useTheme(); 
    const textColor = colors.iconColor;
return (
    <TouchableOpacity onPress={()=>navigation.navigate("videoPlayer",{videoId:props.videoId,title:props.title})}>
    <View style={{flexDirection:"row", margin:20, elevation:4,
            margin:10,
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius:5,
            marginBottom:0
       }}>
        <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
              width:"45%",
              height:100,
              borderRadius:5
            }}   
         />
         <View style={{paddingLeft:10,marginTop:3}}>
             <Text style={{
                 fontSize:17,
                 width:Dimensions.get("screen").width/2,
                 color: textColor,
                 marginBottom:10
             }}
             ellipsizeMode="tail"
             numberOfLines={3}
             >
             {props.title}</Text>
             <Text style={{fontSize:12, color:"gray"}}>{props.channel}</Text>
         </View>
    </View>
    </TouchableOpacity>
)
}

export default MiniCard