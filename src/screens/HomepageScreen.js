import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Balance from '../components/Balance';
import Name from '../components/Name';
import Bayar from '../components/Bayar';
import Promo from '../components/Promo';
import NavigationBar from '../components/NavigationBar';

const HomePageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../assets/background.png')} />
      <Name/>
      <Balance/>
      <Bayar/>
      <Promo/>
      <NavigationBar navigation={navigation}/>
    </View>
  );
};


export default HomePageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center'
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
  },
  backgroundImage: {
    position: "absolute",
    width: "100%"
  }
});
