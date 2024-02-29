import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import PhoneRegisterScreen from './src/screens/PhoneRegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import InboxScreen from './src/screens/InboxScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
      >
        <Stack.Screen name="Phone Register" 
          component={PhoneRegisterScreen}  
          options={{ 
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
        <Stack.Screen name="Login" 
          component={LoginScreen}  
          options={{ 
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#39B54A',
              shadowOpacity: 0,
              elevation: 0,
            }
          }}  
        />
        <Stack.Screen name="Register" 
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
          component={HomeScreen} 
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
