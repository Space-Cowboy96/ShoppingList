import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'
import TitleText from './TitleText'
import AppStyles from '../constants/AppStyles'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TitleText style={AppStyles.headerOne}>My Shopping List</TitleText>
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
})

export default Header
