// ProfileScreen.js
import React, { useState, useContext } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { UserContext } from './UserContext';
import {ThemeContext} from './theme';

const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      {isEditing ? (
        // Edit mode
        <EditProfile user={user} onChange={handleChange} onSave={handleSave} />
      ) : (
        // View mode
        <>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Phone Number: {user.phoneNumber}</Text>
          <Text style={styles.text}>Address: {user.address}</Text>
          <Text style={styles.text}>City: {user.city}</Text>
          <Text style={styles.text}>State: {user.state}</Text>
          <Text style={styles.text}>Zip Code: {user.zipCode}</Text>
          <Text style={styles.text}>Credit Card Number: {user.creditCardNumber}</Text>
          <Text style={styles.text}>Expiration Date: {user.expirationDate}</Text>
          <Text style={styles.text}>CVV: {user.cvv}</Text>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit Details</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const EditProfile = ({ user, onChange, onSave }) => {
  return (
    <ScrollView>
      <TextInput
        value={user.name}
        placeholder="Name"
        onChangeText={(text) => onChange('name', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.email}
        placeholder="Email"
        onChangeText={(text) => onChange('email', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.phoneNumber}
        placeholder="Phone Number"
        onChangeText={(text) => onChange('phoneNumber', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.address}
        placeholder="Address"
        onChangeText={(text) => onChange('address', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.city}
        placeholder="City"
        onChangeText={(text) => onChange('city', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.state}
        placeholder="State"
        onChangeText={(text) => onChange('state', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.zipCode}
        placeholder="Zip Code"
        onChangeText={(text) => onChange('zipCode', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.creditCardNumber}
        placeholder="Credit Card Number"
        onChangeText={(text) => onChange('creditCardNumber', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
        keyboardType="number-pad"
        maxLength={16}
      />
      <TextInput
        value={user.expirationDate}
        placeholder="Expiration Date"
        onChangeText={(text) => onChange('expirationDate', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={user.cvv}
        placeholder="CVV"
        onChangeText={(text) => onChange('cvv', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
        keyboardType="number-pad"
        maxLength={3}
      />
      <TouchableOpacity style={styles.button} onPress={onSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
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
  text: {
    fontSize: 18,
    marginBottom: 10,
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

export default ProfileScreen;