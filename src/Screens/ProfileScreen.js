// src/Screens/ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../styles/profileStyles'; 

const ProfileScreen = ({ navigation }) => {
  // Estado para armazenar o texto da biografia
  const [bioText, setBioText] = useState(
    'Apaixonado por tecnologia e inovação, Pedro Ferreira é um desenvolvedor de software com mais de 5 anos de experiência.'
  );

  // Limite de caracteres da biografia
  const maxLength = 120;

  // Função para manipular a alteração do texto da biografia
  const handleBioChange = (text) => {
    if (text.length <= maxLength) {
      setBioText(text);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Pedro Ferreira</Text>
        <Image 
          style={styles.profileImage}
          source={require('../../assets/profile.png')} 
        />
        <Text style={styles.profileName}>
          Pedro Ferreira: Entusiasta de tecnologia | Desenvolvedor de Software | Aventureiro nas horas vagas
        </Text>
        <Text style={styles.sectionTitle}>BIOGRAFIA</Text>

        {/* Campo de entrada de texto com limite de caracteres */}
        <TextInput
          style={styles.bioTextInput}
          multiline
          value={bioText}
          onChangeText={handleBioChange}
          maxLength={maxLength}
          placeholder="Digite sua biografia aqui..."
        />

        {/* Botões de Navegação */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Menu Inicial</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Minhas Imagens</Text>
        {/* Aqui você pode adicionar uma lista de imagens ou um componente de galeria */}
        <View style={styles.imageGallery}>
          <Image source={require('../../assets/image1.png')} style={styles.galleryImage} />
          <Image source={require('../../assets/image2.png')} style={styles.galleryImage} />
          <Image source={require('../../assets/image3.png')} style={styles.galleryImage} />
          <Image source={require('../../assets/image1.png')} style={styles.galleryImage} />
          <Image source={require('../../assets/image2.png')} style={styles.galleryImage} />
          <Image source={require('../../assets/image3.png')} style={styles.galleryImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
