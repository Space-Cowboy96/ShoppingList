import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleText = ({style, children}) => {
  return (
      <Text style={{...styles.Title,...style}}>{children}</Text>
  )
}

export default TitleText

const styles = StyleSheet.create({
    Title: {
        fontSize: 30,
        padding: 10,
    }
})