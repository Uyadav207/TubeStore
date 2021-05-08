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
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currTheme = useSelector(state => {
    return state.myDarkMode
  })
  const mycolor = colors.iconColor;
  const cardData = useSelector(state => {
    return state.cardData
  })
  console.log(currTheme);
  return (
    <SafeAreaView style={{
      flex: 1,
      marginTop: Constant.statusBarHeight,
      backgroundColor: colors.headerColor,
    }}>
      <StatusBar style={currTheme === false ? "light" : "dark"} />
      <View style={styles.header}>
        <View style={styles.header_text}>
          <MaterialIcons name="video-collection" size={24} color="#E85075" />
          <Text style={{
            fontSize: 24,
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
        <View>
          <ScrollView>
            <FlatList KeyExtractor={item => item.id.videoId}
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
          </View>
          :
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to TubeStore!</Text>
            <Text style={styles.instructions}>To get started, Search for the video you want to enjoy!</Text>
            <Text style={styles.instructions}>Picture in Picture mode available for IOS 14 above!</Text>
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
    alignItems: "center"
  },
  container: {  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: Colors.headerColor,
    AlignSelf: 'center'
  },  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,
    padding: 10,
    fontWeight: "bold",  
    color: "#5875FF"
  },  
  instructions: {  
    textAlign: 'center',  
    color: "#5875FF",  
    marginBottom: 5,  
  }
}

