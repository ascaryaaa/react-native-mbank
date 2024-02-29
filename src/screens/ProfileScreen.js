import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    AsyncStorage
    .removeItem('token')
    .then(() => navigation.navigate('Login'))
  }
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <TouchableOpacity title='logout' style={styles.button} onPress={handleLogout}>
          <Text style={{color:'white'}} >Logout</Text>
        </TouchableOpacity>
      </View>
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
},
button: {
    backgroundColor: '#39B54A',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    margin: 5,
}
})
