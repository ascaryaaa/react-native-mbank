import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const Component = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text1}>Promo & Diskon</Text>
          <TouchableOpacity>
            <Text style={styles.text2}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
          <ScrollView style={styles.scrollView}horizontal={true}>
            <TouchableOpacity style={styles.imageContainer}>
              <Image style={styles.image} source={require('../assets/Card.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image style={styles.image} source={require('../assets/Card.png')}/>
            </TouchableOpacity>
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
  paddingRight: 50,
},
image: {
  width: 345,
  height: 184,
},
imageContainer: {
  paddingRight: 10,
}
})
