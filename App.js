import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './CartContext';
import {UserProvider} from './UserContext';
import {ThemeProvider, ThemeContext} from './theme';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import MenuScreen from './MenuScreen';
import MenuItemDetails from './MenuDetails';
import CartScreen from './CartScreen';
import Form1Screen from './Form1Screen';
import Form2Screen from './Form2Screen';
import Form3Screen from './Form3Screen';
import CheckoutScreen from './CheckoutScreen'

const Stack = createStackNavigator();

const App = () => {


  return (
    <ThemeProvider>
      <CartProvider>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Menu Item Details" component={MenuItemDetails} />
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Form1Screen" component={Form1Screen} />
                <Stack.Screen name="Form2Screen" component={Form2Screen} />
                <Stack.Screen name="Form3Screen" component={Form3Screen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </CartProvider>
    </ThemeProvider>
  );
};



export default App;



