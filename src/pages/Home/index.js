import React, {useState, useContext} from 'react';
import  Icon  from 'react-native-vector-icons/MaterialIcons'; 
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Produtos from '../../../components/Produtos';
import { useNavigation } from '@react-navigation/native';
import {CartContext} from '../../contexts/CartContext';


export default function Home() {

    const {cart, addItemCart} = useContext(CartContext)

    const navigation = useNavigation();
    const [list, setList] = useState([
        {
          id: '1',
          name: 'Coca cola',
          price: 19.90
        },
        {
          id: '2',
          name: 'Chocolate',
          price: 6.50
        },
        {
          id: '4',
          name: 'Queijo 500g',
          price: 15
        },
        {
          id: '5',
          name: 'Batata frita',
          price: 23.90
        },
        {
          id: '6',
          name: 'Guarana lata',
          price: 6.00
        },
      ])
    
   function handleAddCart(item){
    addItemCart(item);
   }
    
     


 return (
    <SafeAreaView style={styles.container}>
     
    <View style={styles.areaTitulo}>
       <Text style={styles.titulo}>Lista de produtos</Text>

       <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
         <View style={{flexDirection:'row'}}>
           {cart.length >= 1 && (
            <View style={styles.quantificador}>
              <Text>{cart?.length}</Text>
            </View>  
           )}        
           <Icon name='shopping-cart' color="#121212" size={35}/> 
         </View>
           
       </TouchableOpacity>
    </View>
    
    <View>
       <FlatList
           data={list}
           keyExtractor={ item => item.id }
           renderItem={ ({ item }) => <Produtos data={item} addToCart={() => handleAddCart(item)} />  }
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{ paddingBottom: 20 }}
           />
    </View>


   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      
    },
    areaTitulo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 10,
      marginTop:20
    },
    titulo: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20
    },
    quantificador:{
      backgroundColor: '#DC143C',
      height: 20,
      width: 20,
      borderRadius: 60,
      marginTop: 12,
      marginRight: -10,
      alignItems: 'center'
    }
  });