import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image, Platform, Linking } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageContext } from '../context/ImageContext';
import problemDetailsStyles from '../styles/problemDetailsStyles';
import { useColorTheme } from '../context/ColorContext';

const ProblemDetailsScreen = ({ navigation, route }) => {
  const { colors } = useColorTheme();
  const styles = problemDetailsStyles(colors);
  const { images, setImages } = useContext(ImageContext);

  const { selectedProblems = [] } = route.params || {};
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [tempImages, setTempImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const savedImages = await AsyncStorage.getItem('images');
        if (savedImages) {
          setImages(JSON.parse(savedImages));
        }
      } catch (error) {
        console.error('Erro ao carregar imagens do AsyncStorage', error);
      }
    };
    loadImages();
  }, []);

  const handleGenerateLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'Precisamos da sua permissão para acessar a localização.');
      return;
    }

    try {
      const userLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = userLocation.coords;
      setLocation({ latitude, longitude });

      const url = Platform.select({
        ios: `maps://app?saddr=${latitude},${longitude}`,
        android: `geo:${latitude},${longitude}?q=${latitude},${longitude}`,
        default: `https://www.google.com/maps?q=${latitude},${longitude}`,
      });

      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Erro', 'Não foi possível abrir o mapa.');
      }
    } catch (error) {
      Alert.alert('Erro ao obter localização', error.message);
    }
  };

  const handleAttachImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0];
      setTempImages((prevImages) => [...prevImages, { uri: selectedImage.uri }]);
    }
  };

  const handleRemoveImage = (index) => {
    setTempImages((prevImages) => prevImages.filter((_, imgIndex) => imgIndex !== index));
  };

  const handleSend = async () => {
    if (description.trim() === '') {
      Alert.alert('Erro', 'Por favor, descreva o problema antes de enviar.');
      return;
    }

    const newImages = [...images, ...tempImages];
    setImages(newImages);
    await AsyncStorage.setItem('images', JSON.stringify(newImages));

    setTempImages([]);
    setDescription('');
    setLocation(null);

    Alert.alert('Sucesso', 'Seu problema foi enviado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>PROBLEMAS SELECIONADOS</Text>
      <View style={styles.problemsContainer}>
        {selectedProblems.length > 0 ? (
          <Text style={[styles.problemsText, { color: colors.text }]}>
            {selectedProblems.map((problem, index) => (
              <Text key={index}>• {problem} {'\n'}</Text>
            ))}
          </Text>
        ) : (
          <Text style={[styles.problemsText, { color: colors.text }]}>Nenhum problema selecionado.</Text>
        )}
      </View>

      <Text style={[styles.subtitle, { color: colors.text }]}>DESCREVA O PROBLEMA</Text>
      <TextInput
        style={[styles.descriptionInput, { color: colors.text, backgroundColor: colors.inputBackground }]}
        multiline
        placeholder="Descreva o problema"
        placeholderTextColor={colors.placeholderText}
        value={description}
        onChangeText={setDescription}
      />

      <View style={styles.imagePreviewContainer}>
        {tempImages.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: image.uri }} style={styles.imagePreview} />
            <TouchableOpacity onPress={() => handleRemoveImage(index)}>
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleAttachImage}
          disabled={Platform.OS === 'web'}
        >
          <FontAwesome name="camera" size={24} color={colors.icon} />
          <Text style={[styles.actionButtonText, { color: colors.text }]}>Anexar imagens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleGenerateLocation}>
          <MaterialIcons name="location-on" size={24} color={colors.icon} />
          <Text style={[styles.actionButtonText, { color: colors.text }]}>Gerar Geolocalização</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.sendButton, { backgroundColor: colors.buttonBackground }]} onPress={handleSend}>
        <Text style={[styles.sendButtonText, { color: colors.buttonText }]}>ENVIAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProblemDetailsScreen;
