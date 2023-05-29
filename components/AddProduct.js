import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image, ImageBackground } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';


const AddProduct = ({submitHandler, displayModal, handleCancel}) => {

    const [product, setProduct] = useState('');

    const inputHandler = (val) => {
        setProduct(val);
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
                    <TextInput
                        style={styles.inputText}
                        placeholder="New product"
                        onChangeText={inputHandler}
                        value={product}
                        maxLength={9}    
                    />
                    <View style={styles.btnContainer}>
                        <ButtonComponent
                            onPressHandler={handleClick}
                            style={styles.btnSeagreen}
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
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 10,
        fontSize: 18,
        //flexGrow: 1,
        marginBottom: 10,
        textAlign: "center",
        borderRadius: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnSeagreen: {
        backgroundColor: 'seagreen',
        width: 150,
        borderRadius: 6,
    },
    btnTomato: {
        backgroundColor: 'tomato', 
        width: 150,
        borderRadius: 6,
    },
});