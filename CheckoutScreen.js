// CheckoutScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from './CartContext';
import { UserContext } from './UserContext';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      navigation.navigate('Cart');
    }
  }, [cart]);

  const handlePlaceOrder = () => {
    if (!user.creditCardNumber || !user.expirationDate || !user.cvv) {
      Alert.alert('Error', 'Please enter your card details on your profile before placing an order.');
      return;
    }
    // Implement payment processing and order submission logic here
    
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigation.navigate('OrderSuccess');
    }, 2000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>{item.description}</Text>
              </View>
              <View style={{ alignItems: 'flex-end', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>R{item.price}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ paddingVertical: 20, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#ddd' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total: R{total.toFixed(2)}</Text>
        <TouchableOpacity onPress={handlePlaceOrder} style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 18, color: '#fff' }}>Place Order</Text>
        </TouchableOpacity>
      </View>
      {showNotification && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order placed successfully!</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CheckoutScreen;