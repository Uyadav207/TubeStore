import React from 'react';
import { StyleSheet, Text, View , Image, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation,useTheme} from "@react-navigation/native"


const MiniCard = (props) =>{
    const navigation =useNavigation();
    const {colors} = useTheme(); 
    const textColor = colors.iconColor;
return (
    <TouchableOpacity onPress={()=>navigation.navigate("videoPlayer",{videoId:props.videoId,title:props.title})}>
    <View style={{flexDirection:"row", margin:10,
    height:100,
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            borderRadius:5,
       }}>
        <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
              width:"45%",
              height:90,
              borderRadius:5
            }}   
         />
         <View style={{paddingLeft:10,marginTop:3}}>
             <Text style={{
                 fontSize:15,
                 width:Dimensions.get("screen").width/2,
                 color: textColor,
                 marginBottom:10
             }}
             ellipsizeMode="tail"
             numberOfLines={2}
             >
             {props.title}</Text>
             <Text style={{fontSize:12, color:"gray"}}>{props.channel}</Text>
         </View>
    </View>
    </TouchableOpacity>
)
}

export default MiniCard