import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'



import Colors from '../constants/Colors'
import TitleText from './TitleText'
import AppStyles from '../constants/AppStyles'

const Header = () => {

  const [fontsLoaded] = useFonts({
    "Bangers": require("../assets/fonts/Bangers-Regular.ttf"),
  });
  
  useEffect(() => {
    async function prepare() {
        await SplashScreen.preventAutoHideAsync();
    }
    prepare();
}, []);

if (!fontsLoaded) {
return null;
}else{
SplashScreen.hideAsync();
}


  return (
    <View style={styles.headerContainer}>
      <TitleText style={styles.text}>My Shopping List</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 30,
        paddingTop: 35,
        paddingBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: 'white',     
    },
    text: {
      fontFamily: 'Bangers',
      fontSize: 30,
    },
})

export default Header
