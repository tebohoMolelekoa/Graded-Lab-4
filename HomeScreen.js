import React, { useLayoutEffect, useContext } from 'react';
import { View, Button, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from './theme';
import ToggleTheme from './ToggleTheme';

const HomeScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); 


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={24} color="black" style={{ marginRight: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Ionicons name="cart-outline" size={24} color="black" style={{ marginRight: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleTheme}>
          <Ionicons name={theme.textColor === '#000' ? 'moon' : 'sunny'} size={24} color={theme.textColor} />
        </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ImageBackground
      source={require('./Pics/backgroundPic.jpg')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 240 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Welcome to TJs Food Delivery!</Text>
        <Text style={{ fontSize: 18, marginBottom: 20, color: 'white' }}>
          Explore our menu and order your favorite food today!
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '',
            padding: 10,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={{ fontSize: 18, color: 'white', }}>View Menu</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};



export default HomeScreen;