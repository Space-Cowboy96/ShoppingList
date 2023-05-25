import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import Products from './components/Products';
import AddProduct from './components/AddProduct';


export default function App() {

  const [myProducts, setMyProducts] = useState([]);
  
  const submitHandler = (product) => {
    if(product.length > 1){
      const idString = Date.now().toString();
      setMyProducts(currentMyProduct => [{key: idString, name: product},...currentMyProduct]);
    }
    else{
      Alert.alert('Sorry', 'Product name must be at least 2 characters long.', [
        {
          text: "Ok",
          onPress: () => console.warn("alert closed"),
          style: "default"
        }
      ]);
    }
  }

  const deleteProduct = (key) => {
    setMyProducts(currentMyProduct => {
      return currentMyProduct.filter(product => product.key!= key);
    })
  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler}/>
      <FlatList
        data={myProducts}
        renderItem={({item}) => (
        <Products
          name={item.name}
          idString={item.key}
          deleteProduct={deleteProduct}
        />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop:60,

  }
});
