import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'

const Input = (props) => {
  return (
    <TextInput 
      style={{...styles.inputTxt, ...props.style}} 
      placeholder={props.textPlaceHolder}
      value={props.inputValue}
      onChangeText={props.inputOnChangeText}
      {...props}
      >
    </TextInput>
  )
}

export default Input

const styles = StyleSheet.create({

  inputTxt:{
    backgroundColor: 'white',
    borderColor: Colors.inputBox,
    height: 50,
    marginVertical: 5,
    textAlign: "center",
  },

})