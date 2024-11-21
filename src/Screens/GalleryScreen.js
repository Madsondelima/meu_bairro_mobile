import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/galleryStyles';
import { ImageContext } from '../context/ImageContext';
import { useColorTheme } from '../context/ColorContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GalleryScreen = ({ navigation }) => {
  const { images, setImages } = useContext(ImageContext);
  const { colors } = useColorTheme();
  const themedStyles = styles(colors);

  // Função para excluir uma imagem
  const handleDeleteImage = async (imageUri) => {
    Alert.alert(
      "Excluir imagem",
      "Tem certeza de que deseja excluir esta imagem?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: async () => {
            const updatedImages = images.filter((img) => img.uri !== imageUri);
            setImages(updatedImages);
            await AsyncStorage.setItem('images', JSON.stringify(updatedImages));
          },
          style: "destructive"
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={themedStyles.imageContainer}>
      <Image source={{ uri: item.uri }} style={themedStyles.image} />
      <TouchableOpacity
        style={themedStyles.deleteButton}
        onPress={() => handleDeleteImage(item.uri)}
      >
        <MaterialIcons name="delete" size={20} color={colors.deleteIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>GALERIA DE IMAGENS</Text>

      {images.length > 0 ? (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.uri}
          numColumns={3}
          contentContainerStyle={themedStyles.grid}
        />
      ) : (
        <Text style={themedStyles.emptyText}>Nenhuma imagem disponível.</Text>
      )}

      <TouchableOpacity
        style={themedStyles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <MaterialIcons name="home" size={30} color={colors.buttonText} />
        <Text style={themedStyles.homeButtonText}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GalleryScreen;
