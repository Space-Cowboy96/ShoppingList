import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const AddProduct = ({submitHandler}) => {

    const [product, setProduct] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);

    useEffect(() => {
        if(product.length > 1){
            setBtnDisable(false);
        }else{
            setBtnDisable(true);
        }
    }, [product])

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
                disabled={btnDisable}
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