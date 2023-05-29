import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';


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
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="New product"
                        onChangeText={inputHandler}
                        value={product}
                        maxLength={9}
                            
                    />
                        <Button 
                            title="ADD"
                            onPress={handleClick}
                        />
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={handleCancel}
                        />
                </View> 
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

    inputText: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 10,
        fontSize: 18,
        //flexGrow: 1,
        marginBottom: 10,
        textAlign: "center"
    },
});