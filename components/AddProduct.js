import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const AddProduct = ({submitHandler}) => {

    const [product, setProduct] = useState('');

    const inputHandler = (val) => {
        setProduct(val);
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    };



    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                placeholder="New product"
                onChangeText={inputHandler}
                value={product}
            />
            <Button 
                title="ADD" 
                onPress={handleClick}
            />
      </View>
    )
}

export default AddProduct

const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },

    inputText: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 10,
        fontSize: 18,
        flexGrow: 1,
    },
});