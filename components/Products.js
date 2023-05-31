import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';


const Products = ({name, deleteProduct, idString}) => {
    return (
        <Pressable
        onPress={() => deleteProduct(idString)}
        >
            <View style={styles.items}>
                <FontAwesome name="remove" size={24} color="white" style={styles.deleteIcon} />
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable> 
    )
}

export default Products;

const styles = StyleSheet.create({
    items: {
        marginTop: 10,
        backgroundColor: "darkred",
        borderRadius: 6,
    },
    element: {
        fontSize: 17,
        padding: 5,
        marginVertical: 5,
        textAlign: "center",
        color: Colors.textColor,
    },
    deleteIcon: {
        position: "absolute",
        left: 10,
        top: 10,
    },
});