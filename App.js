// App.js
import 'react-native-gesture-handler'; // Deve ser a primeira importação
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importa GestureHandlerRootView
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    // Envolve o AppNavigator com GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
