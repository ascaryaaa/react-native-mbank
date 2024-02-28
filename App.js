import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import HomePageScreen from './src/screens/HomepageScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import InboxScreen from './src/screens/InboxScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
      >
        <Stack.Screen name="Daftar Baru" 
          component={RegisterScreen}  
          options={{ 
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
        <Stack.Screen name="Home" 
          component={HomePageScreen} 
          options={{
            headerShown: false
          }}  
        />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Inbox" component={InboxScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
