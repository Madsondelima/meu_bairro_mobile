import 'react-native-gesture-handler'; // Deve ser a primeira importação para configurar gestos corretamente
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Envolve o app com suporte a gestos
import AppNavigator from './src/navigation/AppNavigator'; // Importa o navegador de navegação
import { ColorProvider } from './src/context/ColorContext'; // Importa o contexto de cores
import { ImageProvider } from './src/context/ImageContext'; // Importa o contexto de imagens

const App = () => {
  return (
    // O GestureHandlerRootView garante que todos os gestos sejam manipulados corretamente
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* O ColorProvider oferece suporte a temas de cores, incluindo acessibilidade */}
      <ColorProvider>
        {/* O ImageProvider gerencia as imagens no app */}
        <ImageProvider>
          <AppNavigator />
        </ImageProvider>
      </ColorProvider>
    </GestureHandlerRootView>
  );
};

export default App;
