import React, { useContext, useState, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from './CartContext';
import { ThemeContext } from './theme';
import { useNavigation } from '@react-navigation/native';

const MenuItemDetails = ({ route }) => {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity, price: item.price * quantity });
    navigation.navigate('Cart');
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Menu Item Details',
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
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image source={item.image} style={{ width: 200, height: 200, borderRadius: 10 }} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{item.name}</Text>
        <Text style={{ fontSize: 18, color: '#666', marginBottom: 10 }}>{item.description}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          R{(item.price * quantity).toFixed(2)}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <TouchableOpacity onPress={handleDecrement} style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }}>
            <Ionicons name="remove" size={24} color="#666" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrement} style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }}>
            <Ionicons name="add" size={24} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddToCart} style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 10 }}>
          <Text style={{ fontSize: 18, color: '#fff' }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuItemDetails;