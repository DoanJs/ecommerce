import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/routers/AuthNavigator';
import MainNavigator from './src/routers/MainNavigator';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWellcome, setIsWellcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWellcome(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <NavigationContainer>
      {isWellcome ? (
        <SplashScreen />
      ) : isLoading ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;
