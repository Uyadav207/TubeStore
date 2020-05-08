import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign, Ionicons, MaterialIcons, Entypo} from '@expo/vector-icons';
import Constant from 'expo-constants';
import {useNavigation, useTheme} from "@react-navigation/native";



export default function Header() {


  const navigation = useNavigation()
  const {colors} = useTheme()
  const mycolor = colors.iconColor
  
  
  
  return (
    <View style={{
        height: 45,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        // shadowOffset: { width:10, height:10,},
        // shadowColor: 'black',
        // shadowOpacity: 0.05
    }}>

    
    <View style={{
      flexDirection:"row",

    }}>
        <Entypo style={{marginLeft:10}} name="video" size={28} color = "red" />
        <Text style={{
          fontSize: 22,
          marginLeft: 10,
          color: mycolor,
          fontWeight: "bold"
          }}>
          
        </Text>
      </View>
      <View style={{
          flexDirection:"row",
          justifyContent: "space-around",
          width: 150,
          margin:5
       }}>
        <Ionicons style={{marginLeft:10}} name="md-search" size={32} color={mycolor} 
          onPress={()=>navigation.navigate("search")}
        />        
      </View>
    </View>
  );
}

