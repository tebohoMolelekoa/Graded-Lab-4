import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { users } from './UserData';

const Form2Screen = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleStateChange = (text) => {
    setState(text);
  };

  const handleZipCodeChange = (text) => {
    setZipCode(text);
  };

  const handleSubmit = () => {
    const user = users[users.length - 1];
    user.address = address;
    user.city = city;
    user.state = state;
    user.zipCode = zipCode;
    // Navigate to Form3Screen
    navigation.navigate('Form3Screen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={handleAddressChange}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={handleCityChange}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={handleStateChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={handleZipCodeChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Form2Screen;