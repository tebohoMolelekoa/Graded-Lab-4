import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { users } from './UserData';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      navigation.navigate('Home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <ImageBackground
      source={require('./Pics/backgroundPic.jpg')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleLogin}>
          <View
            style={{
              backgroundColor: '#007bff',
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18, color: '#fff' }}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ fontSize: 18, color: '#007bff' }}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;