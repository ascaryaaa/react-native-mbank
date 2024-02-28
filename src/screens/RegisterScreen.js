import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Checkbox from '../components/Checkbox';

const RegisterScreen = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckboxChange = (isChecked) => {
    console.log('Checkbox is checked:', isChecked);
  };

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
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textAssalamualaikum}>Assalamualaikum</Text>
        <Text>selamat datang di Syariah</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image}source={require('../assets/Illustration.png')}/>
        </View>
        <Text>Mohon masukkan nomor telepon Anda, kami akan mengirimkan kode OTP ke nomor Anda melalui WhatsApp/SMS</Text>
        <View style={styles.form}>
          <Text style={styles.textNomor}>Nomor Telpon</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <Text style={styles.contoh}>Contoh: 081234567890</Text>
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
        <View>
          <Checkbox label="Saya telah menyetujui data pribadi saya dikelola oleh PT Solusi Pasti Indonesia dan partner yang bekerja sama dengan PT Solusi Pasti Indonesia untuk tujuan yang telah disebutkan di dalam Kebijakan Privasi Syariah" onChange={handleCheckboxChange} />
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
        </ScrollView>
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
    justifyContent: 'center',
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
    backgroundColor: '#f7f7f7'
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
