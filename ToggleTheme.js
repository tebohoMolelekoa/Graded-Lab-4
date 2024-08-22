
import React, { useContext } from 'react';
import {TouchableOpacity, Text} from 'react-native'
import { ThemeContext } from './theme';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Text style={{ color: theme.textColor }}>
        {theme.textColor === '#000' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </Text>
    </TouchableOpacity>
  );
};

export default ToggleTheme;