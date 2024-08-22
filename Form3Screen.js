import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { users } from './UserData';

const Form3Screen = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCcv] = useState('');

  const handleCreditCardNumberChange = (text) => {
    setCreditCardNumber(text);
  };

  const handleExpirationDateChange = (text) => {
    setExpirationDate(text);
  };

  const handleCvvChange = (text) => {
    setCcv(text);
  };

  const handleSubmit = () => {
    const user = users[users.length - 1];
    user.creditCardNumber = creditCardNumber;
    user.expirationDate = expirationDate;
    user.cvv = cvv;
    // Navigate to ProfileScreen
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
        value={creditCardNumber}
        onChangeText={handleCreditCardNumberChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date"
        value={expirationDate}
        onChangeText={handleExpirationDateChange}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={handleCvvChange}
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

export default Form3Screen;