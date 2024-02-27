import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
const Balance = () => {
    return (
      <View style={styles.container}>
        <View style={styles.Nama}>
            <Text style={styles.text1}>Assalamualaikum</Text>
            <Text style={styles.text2}>Annisa Avrillia</Text>
        </View>
        <View style={styles.notificationContainer}>
            <TouchableOpacity>
                <Image source={require('../assets/Notification.png')}/>
            </TouchableOpacity>
        </View>
      </View>
    );
};
export default Balance;

const styles = StyleSheet.create({
container: {
    // backgroundColor: 'red',
    paddingVertical: 20,
    width:'80%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
},
notificationContainer: {
    justifyContent: 'center',
    alignContent: 'center',
},
text1: {
    color: '#f1f1f1',
    paddingVertical: 5,
},
text2: {
    color: 'white',
    paddingVertical: 5,
    fontSize: 18,
}
})
