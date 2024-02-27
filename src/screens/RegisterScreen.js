import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validation = (phone) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (/^\d+$/.test(phone) && phone.length >= 9 && phone.length <= 14) {
          resolve(true);
        } else {
          reject('Phone number must be between 9 and 14 digits');
        }
      }, 1000);
    });
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      await validation(number);
      navigation.navigate('Home');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textAssalamualaikum}>Assalamualaikum</Text>
        <Text>selamat datang di Syariah</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image}source={require('../assets/Illustration.png')}/>
        </View>
        <View style={styles.form}>
          <Text style={styles.text1}>Nomor Telpon</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <TouchableOpacity>
              <Text>Sudah punya akun syariah?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick} disabled={loading}>
              {loading ? <ActivityIndicator size="small" color="#FFFFFF" /> : <Text style={styles.button2Text}>Login</Text>}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#39B54A'
  },
  content: {
    flex:1,
    marginTop:10,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    paddingBottom: 30,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  form: {
    paddingTop: 100,
    margin: 12,
  },
  text1: {
    paddingVertical: 5,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  button2Text: {
    color: '#852884',
    fontWeight: 'bold'
  },
  image: {
    width:350,
    height:232,
  },
  imageContainer: {
    alignItems: 'center'
  },
  textAssalamualaikum: {
    
  }
});
