import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function Name() {
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
    <View style={styles.container}>
      <View style={styles.Nama}>
        <Text style={styles.text1}>Assalamualaikum</Text>
        <Text style={styles.text2}>{user && user.name}</Text>
      </View>
      <View style={styles.notificationContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/Notification.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
});
