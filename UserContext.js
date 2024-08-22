
import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const validateUserInput = () => {
    // Implement user input validation logic here
    // Return true if input is valid, false otherwise
  };

  return (
    <UserContext.Provider value={{ user, updateUser, validateUserInput }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };