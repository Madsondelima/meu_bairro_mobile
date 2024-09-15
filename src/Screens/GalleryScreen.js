// src/Screens/GalleryScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/galleryStyles';
import { ImageContext } from '../context/ImageContext'; // Importa o contexto

const GalleryScreen = ({ navigation }) => {
  const { images } = useContext(ImageContext); // Usa o contexto para obter as imagens

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GALERIA DE IMAGENS</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.uri}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <MaterialIcons name="home" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default GalleryScreen;
