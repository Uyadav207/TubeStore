import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useTheme } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Header() {


  const navigation = useNavigation()
  const { colors } = useTheme()
  const mycolor = colors.iconColor



  return (
    <SafeAreaView style={{
      height: 45,
      backgroundColor: colors.headerColor,
      flexDirection: "row",
      justifyContent: "space-between",
      elevation: 4,
    }}>


      <View style={{
        flexDirection: "row",
        margin: 6,
        marginTop: 10
      }}>
        <MaterialIcons name="video-collection" size={24} color="#E85075" />
        <Text style={{
          fontSize: 22,
          marginLeft: 5,
          color: mycolor,
          fontWeight: "bold"
        }}>
          TubeStore
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
    </SafeAreaView>
  );
}

