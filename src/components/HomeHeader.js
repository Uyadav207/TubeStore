import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons';
import { useNavigation, useTheme } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const mycolor = colors.iconColor

  return (
    <View style={{
      height: 45,
      backgroundColor: colors.headerColor,
      flexDirection: "row",
      justifyContent: "space-between",
    }}>


      <View style={{
        flexDirection: "row",

      }}>
        <Entypo style={{ marginLeft: 10 }} name="video" size={28} color="red" />
        <Text style={{
          fontSize: 22,
          marginLeft: 10,
          color: mycolor,
          fontWeight: "bold"
        }}>

        </Text>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: 150,
        margin: 5
      }}>
        <Ionicons style={{ marginLeft: 10 }} name="md-search" size={32} color={mycolor}
          onPress={() => navigation.navigate("search")}
        />
      </View>
    </View>
  );
}

