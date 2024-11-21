import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import profileStyles from '../styles/profileStyles'; 
import { useColorTheme } from '../context/ColorContext';

const ProfileScreen = ({ navigation }) => {
  const { colors } = useColorTheme(); 
  const styles = profileStyles(colors); 

  const [bioText, setBioText] = useState(
    'Apaixonado por tecnologia e inovação, Pedro Ferreira é um desenvolvedor de software com mais de 5 anos de experiência.'
  );

  const maxLength = 120;

  const handleBioChange = (text) => {
    if (text.length <= maxLength) {
      setBioText(text);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image 
          style={styles.profileImage}
          source={require('../../assets/profile.png')} 
        />
        <Text style={styles.headerText}>Pedro Ferreira</Text>
        <Text style={styles.profileName}>
          Entusiasta de tecnologia | Desenvolvedor de Software | Aventureiro nas horas vagas
        </Text>
        
        <Text style={styles.sectionTitle}>BIOGRAFIA</Text>
        
        <TextInput
          style={styles.bioTextInput}
          multiline
          value={bioText}
          onChangeText={handleBioChange}
          maxLength={maxLength}
          placeholder="Digite sua biografia aqui..."
          placeholderTextColor={colors.placeholderText}
        />
        
        <Text style={styles.characterCount}>
          {bioText.length}/{maxLength} caracteres
        </Text>

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
