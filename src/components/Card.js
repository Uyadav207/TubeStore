import React from 'react';
import { StyleSheet, Text, View , Image, Dimensions, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants';
import { log } from 'react-native-reanimated';
import {useNavigation, useTheme} from "@react-navigation/native"


const Card = (props) =>{
    const navigation =useNavigation();
    const {colors} = useTheme(); 
    const textColor = colors.iconColor;
return (
    <TouchableOpacity onPress={()=>navigation.navigate("videoPlayer",{videoId:props.videoId,title:props.title})}>
      <View style={{
            elevation:4,
            margin:20,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
borderRadius:20
      

      }}
    
      >
        <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={{
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
                margin:0,
                height: 210
            }}   
         />
          <View style={{
              flexDirection:"row",
              margin:10,
              marginLeft:10,
              marginRight:10,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius:20

          }}>
          <MaterialIcons style={{marginTop:15}} name="account-circle" size={40} color="black" />        
          <View style={{
              marginLeft: 10
          }}>
              <Text style={{
                fontSize: 20,
                width:Dimensions.get("screen").width - 100,
                padding:2,
                color:textColor
              }}
              ellipsizeMode="tail"
              numberOfLines ={2}
              >{props.title}</Text>
              <Text style={{
                width:Dimensions.get("screen").width/2+19,
                padding:2,
                color: "gray"
              }}>{props.channel}</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>
)
}

export default Card