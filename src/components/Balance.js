import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default function Balance() {
    const [user, setUser] = useState('');

    useEffect(() => {
      getUser();
    }, []);
  
    const getUser = () => {
      axios.get('https://private-anon-91cc841bc2-itodpbni.apiary-mock.com/account')
        .then(function (response) {
          console.log("Response Get Account", response.data);
          setUser(response.data.user);
        })
        .catch(function (error) {
          console.error("Error", error);
        });
    };
    return (
        <View style={styles.padding}>
            <View style={styles.container}>
                <View style={styles.saldo}>
                    <Text style={styles.text1}>Saldo</Text>
                    <Text style={styles.text2}>{user && `Rp.${user.balance.toLocaleString()}`}</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    width:'90%',
    borderRadius: 10,
},
saldo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    width: '90%',
    alignSelf: 'center'
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
},
padding: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
}
})
