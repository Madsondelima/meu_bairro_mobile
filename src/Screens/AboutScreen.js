// src/Screens/AboutScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/aboutStyles'; // Importa o arquivo de estilo

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>SOBRE</Text>
        <Text style={styles.description}>
          O aplicativo "Meu Bairro" é uma plataforma digital que permite aos cidadãos reportar problemas urbanos e solicitar serviços públicos, como reparos de buracos, melhorias na iluminação e solução de vazamentos. Seu objetivo é facilitar a comunicação entre a comunidade e os órgãos públicos, promovendo uma gestão urbana mais eficiente e participativa, melhorando a qualidade de vida nos bairros.
        </Text>

        {/* Botão para voltar à Home */}
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
