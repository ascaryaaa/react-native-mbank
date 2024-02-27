import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NavigationBar = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <View style={styles.icon}>
              <Image source={require('../assets/home.png')} />
            </View>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
            <View style={styles.icon}>
              <Image source={require('../assets/history.png')}/>
            </View>
            <Text>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inbox')}>
            <View style={styles.icon}>
              <Image source={require('../assets/inbox.png')}/>
            </View>
            <Text>inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
            <View style={styles.icon}>
              <Image source={require('../assets/profile.png')}/>
            </View>
            <Text>Profile</Text>
          </TouchableOpacity>
      </View>
    );
};
export default NavigationBar;

const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    width:'100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
},
icon: {
  width:'50%',
  height:'50%',
  alignItems: 'center',
  justifyContent: 'center'
},
button: {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent:'space-between'
}
})
