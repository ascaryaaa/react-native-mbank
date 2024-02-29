import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FIREBASE_APP, FIREBASE_AUTH } from "../../helpers/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const auth=FIREBASE_AUTH;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useEffect(() => {
    AsyncStorage
    .getItem('token')
    .then(token => {
      if (token !== null) {
        navigation.navigate('Home')
      }
    })
  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password) //1. sign in user
    .then(response => response.user.getIdToken()) //2. call user id token
    .then(token => AsyncStorage.setItem('token', token) ) //3. store token
    .then(() => {
      Alert.alert('Login Success!', 'Welcome!', [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Home')
        }
      ])
    })
    .catch(error => {
      console.log(error.message);
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Invalid Email');
      } else {
        Alert.alert('Error', error.message);
      }
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textAssalamualaikum}>Assalamualaikum</Text>
        <Text>selamat datang di Syariah</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image}source={require('../assets/Illustration.png')}/>
        </View>
        <Text>Mohon masukkan email dan password anda</Text>
        <View style={styles.form}>
          <Text style={styles.textNomor}>Login</Text>
          <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input} 
                placeholder="email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} 
                placeholder="password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}    
              />
            </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text>Belum punya akun?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.button2Text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#39B54A'
  },
  content: {
    flex:1,
    marginTop:10,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    backgroundColor: 'white',
    paddingHorizontal: 20,
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    paddingBottom: 30,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#a6a6a6',
    backgroundColor: '#f7f7f7',
    paddingVertical: 10,
  },
  inputContainer: {
    paddingVertical: 5,
  },
  form: {
    paddingVertical: 20,
  },
  textNomor: {
    paddingVertical: 5,
    fontWeight: 'bold',
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
    alignItems: 'center',
    paddingVertical: 20,
  },
  textAssalamualaikum: {
    color: '#39B54A',
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  contoh: {
    paddingVertical: 5,
    fontSize: 12,
  },
  menyetujui: {
    fontSize:12,
  }
});
