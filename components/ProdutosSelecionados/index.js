import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {useContext, useState} from 'react';
import { CartContext } from '../../src/contexts/CartContext';

export default function ProdutosSelecionados({data, addAmount, removeAmount }) {

    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease(){
        addAmount();
        setAmount(item => item +1)
        
    }


    function handleRemove(){
        removeAmount();
        setAmount(item => item - 1);
        
    }

 return (
   <View style={styles.container}>
     <View>
        <Text style={styles.title}> {data.name}</Text>
        <Text style={styles.price}> R$  {data.price}</Text>
     </View>

     <View style={styles.AmountContainer}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleRemove}>
            <Text>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
            <Text>+</Text>
        </TouchableOpacity>
     </View>

   </View>
  );
}


const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#DFDFDF',
      borderRadius: 2,
      marginBottom: 14,
      padding: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    price: {
        fontSize: 16
    },
    AmountContainer:{
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row'
    },
    buttonAdd:{
        backgroundColor: '#168fff',
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 2
    },
    amount: {
        marginLeft: 14,
        marginRight: 14,
        fontSize: 18
    }
  
  });