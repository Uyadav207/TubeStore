import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';
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
        elevation:4,
        // shadowOffset: { width:10, height:10,},
        // shadowColor: 'black',
        // shadowOpacity: 0.05
    }}>
    <View style={{
      flexDirection:"row",
      margin:6
    }}>
        <AntDesign style={{marginLeft:10}} name="youtube" size={28} color = "red" />
        <Text style={{
          fontSize: 22,
          marginLeft: 5,
          color: mycolor,
          fontWeight: "bold"
          }}>
          YouTube
        </Text>
      </View>
      <View style={{
          flexDirection:"row",
          justifyContent: "space-around",
          width: 150,
          margin:5
       }}>
        <Ionicons style={{marginLeft:10}} name="md-videocam" size={32} color={mycolor} />
        <Ionicons style={{marginLeft:10}} name="md-search" size={32} color={mycolor} 
          onPress={()=>navigation.navigate("search")}
        />        
        <MaterialIcons style={{marginLeft:10}} name="account-circle" size={32} color={mycolor} />        
      </View>
    </View>
  );
}

