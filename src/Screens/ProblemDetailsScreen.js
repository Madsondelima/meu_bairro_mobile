// src/Screens/ProblemDetailsScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { ImageContext } from '../context/ImageContext'; // Importa o contexto de imagens
import styles from '../styles/problemDetailsStyles';

const ProblemDetailsScreen = ({ navigation, route }) => {
  const { selectedProblems = [] } = route.params || {};
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const { images, setImages } = useContext(ImageContext); // Usa o contexto de imagens

  const handleGenerateLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'Precisamos da sua permissão para acessar a localização.');
      return;
    }

    try {
      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
      Alert.alert('Localização obtida', `Latitude: ${userLocation.coords.latitude}, Longitude: ${userLocation.coords.longitude}`);
    } catch (error) {
      Alert.alert('Erro ao obter localização', error.message);
    }
  };

  const handleAttachImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'Precisamos da sua permissão para acessar a galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0]]);
    }
  };

  const handleSend = () => {
    if (description.trim() === '') {
      Alert.alert('Erro', 'Por favor, descreva o problema antes de enviar.');
      return;
    }

    console.log('Problemas:', selectedProblems);
    console.log('Descrição:', description);
    console.log('Imagens:', images);
    console.log('Localização:', location);

    Alert.alert('Sucesso', 'Seu problema foi enviado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>PROBLEMAS SELECIONADOS</Text>

      <View style={styles.problemsContainer}>
        {selectedProblems.length > 0 ? (
          <Text style={styles.problemsText}>
            {selectedProblems.map((problem, index) => (
              <Text key={index}>• {problem} {'\n'}</Text>
            ))}
          </Text>
        ) : (
          <Text style={styles.problemsText}>Nenhum problema selecionado.</Text>
        )}
      </View>

      <Text style={styles.subtitle}>DESCREVA O PROBLEMA</Text>
      <TextInput
        style={styles.descriptionInput}
        multiline
        placeholder="Descreva o problema"
        value={description}
        onChangeText={setDescription}
      />

      {images.length > 0 && (
        <View style={styles.imagePreviewContainer}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image.uri }} style={styles.imagePreview} />
          ))}
        </View>
      )}

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleAttachImage}>
          <FontAwesome name="camera" size={24} color="#000" />
          <Text style={styles.actionButtonText}>Anexar imagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleGenerateLocation}>
          <MaterialIcons name="location-on" size={24} color="#000" />
          <Text style={styles.actionButtonText}>Gerar Geolocalização</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>ENVIAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProblemDetailsScreen;
