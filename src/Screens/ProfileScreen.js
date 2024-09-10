// src/Screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/profileStyles'; 

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Pedro Ferreira</Text>
        <Image 
          style={styles.profileImage}
          source={require('../../assets/profile.png')} 
        />
        <Text style={styles.profileName}>Pedro Ferreira: 
Entusiasta de tecnologia | Desenvolvedor de Software | Aventureiro nas horas vagas</Text>
        <Text style={styles.sectionTitle}>BIOGRAFIA</Text>
        <Text style={styles.bioText}>
        Apaixonado por tecnologia e inovação, Pedro Ferreira é um desenvolvedor de software com mais de 5 anos de experiência em criação de aplicativos móveis e web. Sempre em busca de novos desafios, Pedro adora explorar novas linguagens de programação e contribuir para projetos de código aberto. Quando não está codificando, você pode encontrá-lo em trilhas, fotografando a natureza ou planejando sua próxima viagem de aventura.

“A tecnologia é a arte de transformar ideias em realidade.”
        </Text>
        
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
          {/* Substitua pelos componentes de imagem conforme necessário */}
          {/* Exemplo de uso de imagens */}
          <Image source={require('../../assets/image1.png')} style={styles.galleryImage} />
          <Image source={require('../../assets/image2.png')} style={styles.galleryImage} />
          <Image source={require('../../assets/image3.png')} style={styles.galleryImage} />

          {/* Continue adicionando as imagens aqui */}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
