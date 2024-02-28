import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const Component = () => {
    const [promo, setPromo] = useState('');

    const getPromo = () => {
        axios.get('https://private-anon-91cc841bc2-itodpbni.apiary-mock.com/menu/promo')
          .then(function (response) {
            console.log("Response Get Account", response.data);
            setPromo(response.data);
          })
          .catch(function (error) {
            console.error("Error", error);
          });
    };

    useEffect(() => {
        getPromo();
    }, []);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text1}>Promo & Diskon</Text>
          <TouchableOpacity>
            <Text style={styles.text2}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
          <ScrollView>
            <FlatList
                  horizontal={true}
                  contentContainerStyle={styles.scrollView}
                  data={promo.promos}
                  renderItem={ item  => 
                      <TouchableOpacity style={styles.imageContainer}>
                          <Image style={styles.image} source={{uri: item.item.image}}/>
                      </TouchableOpacity>
                  }
                  keyExtractor={(item) => item.id.toString()}
            />
          </ScrollView>
      </View>
    );
};
export default Component;

const styles = StyleSheet.create({
container: {
    width:'100%',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
},
header:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '90%',
  paddingBottom: 10,
},
text1: {
  color: '#852884',
  fontWeight: 'bold'
},
text2: {
  color: '#39B54A',
},
scrollView: {
  paddingLeft: 18,
  paddingRight: 10,
},
image: {
  width: 345,
  height: 184,
},
imageContainer: {
  paddingRight: 10,
}
})
