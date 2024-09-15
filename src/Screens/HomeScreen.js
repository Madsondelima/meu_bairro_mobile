// src/Screens/HomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import homeStyles from "../styles/homeStyles";

const HomeScreen = ({ navigation }) => {
  // Função para navegar de volta para a tela de login
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView contentContainerStyle={homeStyles.scrollContainer}>
      <View style={homeStyles.container}>
        <Text style={homeStyles.title}>MENU INICIAL</Text>

        <View style={homeStyles.iconRow}>
          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("RequestRegistration")}
          >
            <MaterialIcons name="post-add" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>CADASTRAR SOLICITAÇÃO</Text>
          </TouchableOpacity>

          {/* Botão para adicionar perfil com navegação para a tela EditProfile */}
          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <FontAwesome name="user-plus" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>ADICIONAR PERFIL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("ContactScreen")}
          >
            <AntDesign name="mail" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>FALE CONOSCO</Text>
          </TouchableOpacity>
        </View>

        <View style={homeStyles.iconRow}>
          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("GalleryScreen")}
          >
            <FontAwesome name="image" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>GALERIA DE IMAGENS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <FontAwesome name="user" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>PERFIL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("ServicesScreen")}
          >
            <FontAwesome name="gears" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>SERVIÇOS</Text>
          </TouchableOpacity>
        </View>

        <View style={homeStyles.iconRow}>
          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("FAQScreen")}
          >
            <FontAwesome name="question-circle" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>DÚVIDAS</Text>
          </TouchableOpacity>

          {/* Atualização: Botão "Minhas Solicitações" com navegação */}
          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("MyRequests")}
          >
            <MaterialIcons name="assignment" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>MINHAS SOLICITAÇÕES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homeStyles.iconButton}
            onPress={() => navigation.navigate("About")}
          >
            <FontAwesome name="info-circle" size={40} color="#007bff" />
            <Text style={homeStyles.iconText}>SOBRE</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Logout */}
        <TouchableOpacity
          style={homeStyles.logoutButton}
          onPress={handleLogout}
        >
          <FontAwesome name="sign-out" size={40} color="#ffffff" />
          <Text style={homeStyles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
