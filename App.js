import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Modal, Text, Pressable, Button } from 'react-native';

import Products from './components/Products';
import AddProduct from './components/AddProduct';
import DismissKeyboard from './components/DismissKeyboard';


export default function App() {

  const [myProducts, setMyProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [displayModal, setdisplayModal] = useState(false);

  const submitHandler = (product) => {
    setdisplayModal(false);
    if(product.length > 1){
      const idString = Date.now().toString();
      setMyProducts(currentMyProduct => [{key: idString, name: product},...currentMyProduct]);
    }else{
      setModalOpen(true);
    }
  }

  const deleteProduct = (key) => {
    setMyProducts(currentMyProduct => {
      return currentMyProduct.filter(product => product.key!= key);
    })
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>

        <Modal
          visible={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          animationType='slide'
          hardwareAccelerated={true}
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Oups</Text>
              </View>
                <View style={styles.modalBody}>
                  <Text style={styles.modalBodyText}>Please enter at least 2 characters</Text>
                </View>
                  <View style={styles.modalFooter}>
                    <Pressable style={styles.pressableBtnModal}
                    onPress={() => setModalOpen(false)}>
                      <Text style={styles.modalFooterText}>OK</Text>
                    </Pressable>
                  </View>
            </View>
          </View>
        </Modal>
        <Button
          title="ADD A PRODUCT"
          onPress={() => setdisplayModal(true)}
        />

        <AddProduct submitHandler={submitHandler} displayModal={displayModal}/>

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
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    padding: 40,
    paddingTop:60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    height: 250,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalHeader: {
    backgroundColor: 'gainsboro',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  modalHeaderText: {
    fontSize: 17,
    color: 'black',
  },
  modalBody: {
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: '100%',
    //borderBottomLeftRadius: 15,
    //borderBottomRightRadius: 15,
  },
  pressableBtnModal: {
    backgroundColor: 'lightseagreen',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalFooterText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    padding: 16,
  },

});
