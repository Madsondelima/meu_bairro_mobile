import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import SignUpWithEmailScreen from '../Screens/SignUpWithEmailScreen';
import HomeScreen from '../Screens/HomeScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';
import RequestRegistrationScreen from '../Screens/RequestRegistrationScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SelectServiceScreen from '../Screens/SelectServiceScreen'; // Importa a nova tela

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerTitle: () => <Text>Esqueceu a Senha</Text> }}
        />
        <Stack.Screen
          name="SignUpWithEmail"
          component={SignUpWithEmailScreen}
          options={{ headerTitle: () => <Text>Registrar-se com E-mail</Text> }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerTitle: () => <Text>Menu Inicial</Text> }} 
        />
        <Stack.Screen 
          name="EditProfile" 
          component={EditProfileScreen} 
          options={{ headerTitle: () => <Text>Editar Perfil</Text> }} 
        />
        <Stack.Screen 
          name="RequestRegistration" 
          component={RequestRegistrationScreen} 
          options={{ headerTitle: () => <Text>Cadastrar Solicitação</Text> }} 
        />
        <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen} 
          options={{ headerTitle: () => <Text>Perfil</Text> }} 
        />
        <Stack.Screen 
          name="SelectService" 
          component={SelectServiceScreen} 
          options={{ headerTitle: () => <Text>Selecione o Serviço</Text> }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
