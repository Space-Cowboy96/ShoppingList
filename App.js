import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => {
    setProduct(val);
  }
  
  const submitHandler = () => {
    const idString = Date.now().toString();
    setMyProducts(currentMyProduct => [{key: idString, name: product},...currentMyProduct]);
    setProduct('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="New product"
          onChangeText={inputHandler}
          value={product}
        />
        <Button 
        title="ADD" 
        onPress={submitHandler}
        />
      </View>
      <FlatList
        data={myProducts}
        renderItem={({item}) => <Text style={styles.element}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop:60,

  },
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
  items: {
    marginTop: 10,
  },
  element: {
    fontSize: 17,
    padding: 5,
    backgroundColor: "#32cd32",
    marginVertical: 5,
  }
});
