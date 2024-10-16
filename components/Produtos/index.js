import React, {useState}  from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons'; 
 

export default function Produtos({data, addToCart}) {


 return (
   <View style={styles.item}>
   
        <View>
            <Text>{data.name}</Text>
            <Text>R$ {data.price}</Text>
        </View>

        <View style={styles.btnAdd}>
            <TouchableOpacity onPress={addToCart}>
                <Icon name='add' color="#121212" size={35}/> 
            </TouchableOpacity>
        </View>
   </View>
  );
}


const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      borderWidth: 1,
      padding: 5,
      borderColor: '#C0C0C0'
    },
    btnAdd: {
        backgroundColor: '#1E90FF',
        borderRadius: 20
    }
  });