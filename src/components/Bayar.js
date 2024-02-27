import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
const Bayar = () => {
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.text}>List Pembayaran</Text>
        </View>
        <View style={styles.list}>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../assets/Telco.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../assets/Pln.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../assets/Pdam.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../assets/School.png')}/>
            </TouchableOpacity>
        </View>
      </View>
    );
};
export default Bayar;

const styles = StyleSheet.create({
container: {
    width:'80%',
    borderRadius: 10,
},
list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
image: {
    width: 70,
    height: 70,
},
text: {
    paddingVertical: 10,
    color: '#852884',
    fontWeight: 'bold'
}
})
