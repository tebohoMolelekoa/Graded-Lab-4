import React, { useContext, useLayoutEffect } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from './CartContext';
import { ThemeContext } from './theme';
import ToggleTheme from './ToggleTheme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const menuItems = [
  {
    id: 1,
    name: 'Burger',
    description: 'Juicy beef burger with lettuce, tomato, and cheese',
    price: 10.99,
    image: require('./Pics/burger.webp'),
  },
  {
    id: 2,
    name: 'Pizza',
    description: 'Freshly baked pizza with mozzarella cheese and tomato sauce',
    price: 12.99,
    image: require('./Pics/pizza.jpg'),
  },
  {
    id: 3,
    name: 'Salad',
    description: 'Fresh mixed greens with cherry tomatoes, cucumber, and balsamic vinaigrette',
    price: 8.99,
    image: require('./Pics/salad.webp'),
  },
  {
    id: 4,
    name: 'Sandwich',
    description: 'Turkey breast sandwich with avocado, bacon, and Swiss cheese',
    price: 11.99,
    image: require('./Pics/sandwich.jpg'),
  },
  {
    id: 5,
    name: 'Fries',
    description: 'Crispy french fries cooked to perfection',
    price: 4.99,
    image: require('./Pics/fries.jpg'),
  },
  {
    id: 6,
    name: 'Soda',
    description: 'Cold glass of soda to quench your thirst',
    price: 2.99,
    image: require('./Pics/soda.jpg'),
  },
];

const MenuScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Menu',
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
    <ScrollView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: theme.backgroundColor }}>   
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Menu Item Details', { item })}>
            <View style={{
              flexDirection: 'row',
              padding: 10,
              marginBottom: 10,
              backgroundColor: theme.cardBackgroundColor,
              borderRadius: 10,
              shadowColor: theme.shadowColor,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <Image source={item.image} style={styles.image} />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.textColor }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: theme.textColor }}>{item.description}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.textColor }}>R{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default MenuScreen;