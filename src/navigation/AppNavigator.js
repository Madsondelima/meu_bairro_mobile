// src/navigation/AppNavigator.js
import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import SignUpWithEmailScreen from "../Screens/SignUpWithEmailScreen";
import HomeScreen from "../Screens/HomeScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import RequestRegistrationScreen from "../Screens/RequestRegistrationScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import SelectServiceScreen from "../Screens/SelectServiceScreen"; // Importa a nova tela
import ProblemDetailsScreen from "../Screens/ProblemDetailsScreen"; // Importa a tela de detalhes dos problemas
import GalleryScreen from "../Screens/GalleryScreen"; // Importe a tela de galeria
import MyRequestsScreen from "../Screens/MyRequestsScreen";
import { ImageProvider } from "../context/ImageContext"; // Importa o provedor de contexto
import ServicesScreen from "../Screens/ServicesScreen";
import AboutScreen from "../Screens/AboutScreen";
import FAQScreen from "../Screens/FAQScreen";
import ContactScreen from "../Screens/ContactScreen";
import RequestDetailsScreen from "../Screens/RequestDetailsScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ImageProvider>
      {" "}
      {/* Envolve o provedor de contexto */}
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
            options={{
              headerTitle: () => <Text>Registrar-se com E-mail</Text>,
            }}
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
          <Stack.Screen
            name="ProblemDetailsScreen"
            component={ProblemDetailsScreen}
            options={{ headerTitle: () => <Text>Problemas Selecionados</Text> }}
          />
          <Stack.Screen
            name="GalleryScreen"
            component={GalleryScreen}
            options={{ headerTitle: () => <Text>Galeria de Imagens</Text> }}
          />
          <Stack.Screen
            name="MyRequests"
            component={MyRequestsScreen}
            options={{ headerTitle: () => <Text>Minhas Solicitações</Text> }}
          />
          <Stack.Screen
            name="ServicesScreen"
            component={ServicesScreen}
            options={{ headerTitle: () => <Text>Serviços</Text> }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ headerTitle: () => <Text>Sobre</Text> }}
          />
          <Stack.Screen
            name="FAQScreen"
            component={FAQScreen}
            options={{ headerTitle: () => <Text>Dúvidas</Text> }}
          />
          <Stack.Screen
            name="ContactScreen"
            component={ContactScreen}
            options={{ headerTitle: () => <Text>Fale Conosco</Text> }}
          />
          <Stack.Screen
            name="RequestDetailsScreen"
            component={RequestDetailsScreen}
            options={{ headerTitle: () => <Text>Solicitação</Text> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
};

export default AppNavigator;
