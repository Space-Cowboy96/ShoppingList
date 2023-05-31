import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Modal, Text, Pressable, Image, ImageBackground, SplashScreen } from 'react-native';

import Products from './components/Products';
import AddProduct from './components/AddProduct';
import DismissKeyboard from './components/DismissKeyboard';
import ButtonComponent from './components/ButtonComponent';
import Header from './components/Header';
import Colors from './constants/Colors';


export default function App() {

  const [myProducts, setMyProducts] = useState([]);
  const [modalValidationOpen, setmodalValidationOpen] = useState(false);
  const [displayModal, setdisplayModal] = useState(false);


  const submitHandler = (product) => {
    setdisplayModal(false);
    if(product.length > 1){
      const idString = Date.now().toString();
      setMyProducts(currentMyProduct => [{key: idString, name: product},...currentMyProduct]);
    }else{
      setmodalValidationOpen(true);
    }
  }

  const deleteProduct = (key) => {
    setMyProducts(currentMyProduct => {
      return currentMyProduct.filter(product => product.key!= key);
    })
  }

  const handleCancel = () => {
    setdisplayModal(false);
};

  return (
    <DismissKeyboard>
      <ImageBackground 
        style={styles.backgroundImg}
        source={require('./assets/background-1193727_1280.png')}
      >
        <Header />
        <View style={styles.container}>
          <Modal
            visible={modalValidationOpen}
            onRequestClose={() => setmodalValidationOpen(false)}
            animationType='slide'
            hardwareAccelerated={true}
            transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>Oups</Text>
                </View>
                  <View style={styles.modalBody}>
                    <Image source={require('./assets/Red-check-128px.png')} />
                    <Text style={styles.modalBodyText}>Please enter at least 2 characters</Text>
                  </View>
                    <View style={styles.modalFooter}>
                      <Pressable style={styles.pressableBtnModal}
                      onPress={() => setmodalValidationOpen(false)}>
                        <Text style={styles.modalFooterText}>OK</Text>
                      </Pressable>
                    </View>
              </View>
            </View>
          </Modal>
          <View style={styles.btnContainer}>
            <ButtonComponent
              onPressHandler={() => setdisplayModal(true)}
              btnTitle="ADD PRODUCT"
              style={styles.btnAdd}
            >
            ADD PRODUCT
            </ButtonComponent>
          </View>

          <AddProduct 
          submitHandler={submitHandler} 
          displayModal={displayModal} 
          handleCancel={handleCancel}/>

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
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    padding: 40,
  },
  btnContainer: {
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  modalContent: {
    backgroundColor: Colors.textColor,
    width: '90%',
    height: 300,
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
  },
  pressableBtnModal: {
    backgroundColor: Colors.buttons,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalFooterText: {
    fontSize: 17,
    color: Colors.textColor,
    textAlign: 'center',
    padding: 16,
  },
  btnAdd: {
    backgroundColor: Colors.buttons,
    marginBottom: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  backgroundImg: {
    flex: 1,
  },

});
