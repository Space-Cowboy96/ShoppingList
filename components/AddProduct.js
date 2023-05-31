import React, {useState} from 'react';
import { StyleSheet, View, Modal, ImageBackground } from 'react-native';

import * as Font from 'expo-font';

import ButtonComponent from './ButtonComponent';
import Colors from '../constants/Colors';
import Input from './Input';


const AddProduct = ({submitHandler, displayModal, handleCancel}) => {

    const [product, setProduct] = useState('');

    const inputHandler = (val) => {

        const regex = /[^a-z]/gi;
        setProduct(val.replace(regex, '')); // replace all non-alphabetical characters
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    };

    return (
        <Modal
            visible={displayModal}
            animationType='slide'
            hardwareAccelerated={true}
        >
                <ImageBackground 
                style={styles.inputContainer}
                source={require('../assets/apples-1223772_1280.png')}
                >
                    <View style={styles.modalHeaderContainer}>
                    </View>

                    <Input 
                        style={styles.inputText}
                        textPlaceHolder="New product"
                        inputValue={product}
                        inputOnChangeText={inputHandler}
                    />

                    <View style={styles.btnContainer}>
                        <ButtonComponent
                            onPressHandler={handleClick}
                            style={styles.btnDarkgreen}
                        >
                        ADD
                        </ButtonComponent>

                        <ButtonComponent
                            onPressHandler={handleCancel}
                            style={styles.btnTomato}
                        >
                        CANCEL
                        </ButtonComponent>
                    </View>
                </ImageBackground> 
      </Modal>

    )
}

export default AddProduct

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 24,
    },
    modalHeaderContainer: {
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
    },
    inputText: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        padding: 5,        
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        borderRadius: 30,
        borderWidth: 2,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnDarkgreen: {
        backgroundColor: Colors.buttons,
        width: 170,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
    },
    btnTomato: {
        backgroundColor: Colors.cancel, 
        width: 170,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
    },
});