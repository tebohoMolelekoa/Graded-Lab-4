import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import Form1Screen from './Form1Screen';
import Form2Screen from './Form2Screen';
import Form3Screen from './Form3Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Form" component={FormNavigator} />
    </Tab.Navigator>
  );
};

const FormNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Form1" component={Form1Screen} />
      <Stack.Screen name="Form2" component={Form2Screen} />
      <Stack.Screen name="Form3" component={Form3Screen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;