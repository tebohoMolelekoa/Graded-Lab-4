import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { users, addUser } from './UserData';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    const user = { name, email, password };
    addUser(user);
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('./Pics/backgroundPic.jpg')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 20,
          borderRadius: 10,
          width: '80%',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Sign up
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginBottom: 10,
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
            marginBottom: 10,
          }}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleSignup}>
          <View
            style={{
              backgroundColor: '#007bff',
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: '#fff' }}>Sign up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 18, color: '#007bff' }}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;