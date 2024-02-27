import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Home')}>
            <Text>Sudah punya akun syariah?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.button2Text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'green',
    padding: 10,
    paddingBottom: 30,
  },
  button2: {
    color: 'purple'
  },
  button1: {
    backgroundColor: 'white',
    justifyContent: "center"
  }

});
