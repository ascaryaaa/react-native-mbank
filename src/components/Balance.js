import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
const Balance = () => {
    return (
      <View style={styles.container}>
        <View style={styles.saldo}>
            <Text style={styles.text1}>Saldo</Text>
            <Text style={styles.text2}>Rp 2.000.000</Text>
        </View>
        <View style={styles.feature}>
            <TouchableOpacity style={styles.featureIcon}>
                <Image source={require('../assets/QrisIcon.png')}/>
                <Text>QRIS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureIcon}>
                <Image source={require('../assets/KirimDanaIcon.png')}/>
                <Text>Kirim Dana</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureIcon}>
                <Image source={require('../assets/TopupIcon.png')}/>
                <Text>Top up</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};
export default Balance;

const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    width:'80%',
    borderRadius: 10,
},
saldo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
},
feature: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    paddingTop: 10,
},
featureIcon: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
},
text1: {
    color:'#852884',
},
text2: {
    color:'#852884',
    fontWeight: 'bold'
}
})
