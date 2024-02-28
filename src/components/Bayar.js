import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';

const Bayar = () => {
    const [menuPPOB, setMenuPPOB] = useState('');

    const getMenuPPOB = () => {
        axios.get('https://private-anon-91cc841bc2-itodpbni.apiary-mock.com/menu/ppob')
          .then(function (response) {
            console.log("Response Get Account", response.data);
            // const selectedItem = response.data.list.find(item => item.id === 1);
            setMenuPPOB(response.data);
          })
          .catch(function (error) {
            console.error("Error", error);
          });
    };

    useEffect(() => {
        getMenuPPOB();
      }, []);
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.text}>List Pembayaran</Text>
        </View>
            <FlatList
                contentContainerStyle={styles.list}
                data={menuPPOB.list}
                renderItem={ item  => 
                    <TouchableOpacity>
                        <Image style={styles.image} source={{uri: item.item.image}}/>
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.id.toString()}
            />
      </View>
    );
};
export default Bayar;

const styles = StyleSheet.create({
container: {
    width:'90%',
    borderRadius: 10,
    paddingVertical: 10,
},
list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
},
image: {
    width: 80,
    height: 80,
},
text: {
    color: '#852884',
    fontWeight: 'bold'
}
})
