import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


const Products = ({name, deleteProduct, idString}) => {
    return (
        <Pressable
        onPress={() => deleteProduct(idString)}
        >
            <View style={styles.items}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable> 
    )
}

export default Products;

const styles = StyleSheet.create({
    items: {
      marginTop: 10,
    },
    element: {
      fontSize: 17,
      padding: 5,
      backgroundColor: "#32cd32",
      marginVertical: 5,
    },
});