import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Card from "../components/Card";
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import Constant from 'expo-constants';
import { useTheme } from "@react-navigation/native";
import { useDispatch } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currTheme = useSelector(state => {
    return state.myDarkMode
    })
  const mycolor = colors.iconColor
  const cardData = useSelector(state => {
      return state.cardData
   })
  console.log(cardData);
  return (
      <SafeAreaView style={{
        marginTop: Constant.statusBarHeight,
        backgroundColor: colors.headerColor,
      }}>
        <StatusBar style="light" backgroundColor="#000" />
          <View style={styles.header}>
          <View style={styles.header_text}>
            <Entypo name="video" size={32} color="red" />
            <Text style={{
            fontSize: 30,
            color: mycolor,
            fontWeight: "bold"
            }}>
            TubeStore
          </Text>
          </View>
            <FontAwesome
              name="sun-o" size={30} color={mycolor}
              onPress={() => dispatch({ type: "change_theme", payload: !currTheme })}
            />

            <Ionicons
              name="md-search" size={30} color={mycolor}
              onPress={() => navigation.navigate("search")}
            />

          </View>
          {
            (cardData != '') ?
            <ScrollView>
              <FlatList KeyExtractor={ item => item.id.videoId}
                data={cardData}
                renderItem={({ item }) => {
                  return <Card
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                  />
                }}

                
              />
              </ScrollView>
              :
              <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}>
                <Text style={{ marginTop: 400, fontSize: 20, color: mycolor }} >
                <Entypo name="video" size={32} color="red" />
                </Text>
              </View>
          }
      </SafeAreaView>
  );
}

const styles = {
  header: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    alignItems: "center"
  },
  header_text: {
    flexDirection: "row",
    flex: 0.6,
    alignItems: "center"
  }
}

