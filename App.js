import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Products from './components/Products';
import AddProduct from './components/AddProduct';


export default function App() {

  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product) => {
      const idString = Date.now().toString();
      setMyProducts(currentMyProduct => [{key: idString, name: product},...currentMyProduct]);
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
