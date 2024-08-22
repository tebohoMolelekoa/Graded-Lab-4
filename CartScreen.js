import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CartContext } from './CartContext';
import { Ionicons } from '@expo/vector-icons';
import {ThemeContext} from './theme';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cart, total, removeFromCart, calculateTotal } = useContext(CartContext);
  const navigation = useNavigation();
  const { theme, toggleTheme } = useContext(ThemeContext); 

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Cart',
      headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: theme.cardBackgroundColor, borderBottomWidth: 1, borderBottomColor: theme.borderColor }}>
        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons name={theme.textColor === '#000' ? 'moon' : 'sunny'} size={24} color={theme.textColor} />
        </TouchableOpacity>
        
      </View>
      ),
    });
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>{item.description}</Text>
              </View>
              <View style={{ alignItems: 'flex-end', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>R{item.price}</Text>
                <MaterialIcons name="delete-outline" size={24} color="black" onPress={() => removeFromCart(item)} style={{ marginLeft: 2 }}/>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ paddingVertical: 20, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#ddd' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total: R{total.toFixed(2)}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 18, color: '#fff' }}>Add More to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 18, color: '#fff' }}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;