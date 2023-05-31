import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>My Shopping List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.buttons,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 30,
        paddingTop: 35,
        paddingBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        
    },
    logo: {
        color: Colors.textColor,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: 10,
            fontFamily: 'Pacifico',
    },
})

export default Header
