import { View, Text, StyleSheet, FlatList } from 'react-native';
import {CartContext} from '../../contexts/CartContext';
import ProdutosSelecionados from '../../../components/ProdutosSelecionados'; 
import React, {useContext} from 'react';


export default function Carrinho() {

  const {cart, addItemCart, removeItemCart, totalCarrinho} = useContext(CartContext)

 return (
   <View style={styles.container}>
        <FlatList
           data={cart}
           keyExtractor={ item => String(item.id) }
           ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
           renderItem={ ({ item }) => <ProdutosSelecionados 
           data={item} 
           addAmount={() => addItemCart(item)}   
           removeAmount={() => removeItemCart(item)}
           />}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{ paddingBottom: 20 }}
           ListFooterComponent={() => <Text style={styles.total}> Valor total do carrinho: R$ {totalCarrinho.toFixed(2) }</Text>}
           />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#FAFAFA',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    total:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 24
    }
})