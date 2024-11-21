import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image, Animated } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/editProfileStyles';
import { useColorTheme } from '../context/ColorContext';

const EditProfileScreen = ({ navigation }) => {
  const { colors } = useColorTheme();

  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rg, setRg] = useState('');
  const [address, setAddress] = useState({ cep: '', street: '', number: '', neighborhood: '', city: '' });
  const [error, setError] = useState('');
  
  const profileImageScale = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão Necessária', 'Precisamos de permissão para acessar sua galeria!');
      }
    };

    requestPermissions();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
        animateImage();
      }
    } catch (error) {
      console.error('Erro ao selecionar a imagem:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao selecionar a imagem.');
    }
  };

  const takePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão Necessária', 'Precisamos de permissão para acessar sua câmera!');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
        animateImage();
      }
    } catch (error) {
      console.error('Erro ao abrir a câmera:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao abrir a câmera.');
    }
  };

  const animateImage = () => {
    Animated.sequence([
      Animated.timing(profileImageScale, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(profileImageScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleImageSelection = () => {
    Alert.alert(
      'Selecionar Imagem',
      'Escolha uma opção',
      [
        { text: 'Tirar Foto', onPress: takePhoto },
        { text: 'Escolher da Galeria', onPress: pickImage },
        { text: 'Cancelar', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const validateFields = () => {
    if (!name || !username || !bio || !birthdate || !email || !phone || !rg || !address.cep || !address.street || !address.number || !address.neighborhood || !address.city) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSaveProfile = () => {
    if (!validateFields()) return;

    Alert.alert('Sucesso', 'Perfil salvo com sucesso!');
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={[styles.fullContainer, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
          <Text style={[styles.title, { color: colors.text }]}>EDITAR PERFIL</Text>

          {/* Mostrar a imagem selecionada */}
          <View style={styles.photoContainer}>
            {profileImage ? (
              <Animated.Image source={{ uri: profileImage }} style={[styles.profileImage, { transform: [{ scale: profileImageScale }] }]} />
            ) : (
              <View style={styles.placeholderImage}>
                <Feather name="user" size={50} color="#ccc" />
              </View>
            )}
            <TouchableOpacity style={styles.uploadButton} onPress={handleImageSelection}>
              <Feather name="camera" size={30} color={colors.icon} />
            </TouchableOpacity>
            <Text style={[styles.uploadText, { color: colors.text }]}>Carregar Foto</Text>
          </View>

          {/* Formulário de Edição */}
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="Digite seu nome"
            placeholderTextColor={colors.placeholder}
            value={name}
            onChangeText={setName}
            onBlur={validateFields}
          />
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="Digite o nome de usuário"
            placeholderTextColor={colors.placeholder}
            value={username}
            onChangeText={setUsername}
            onBlur={validateFields}
          />
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="Escreva sobre você"
            placeholderTextColor={colors.placeholder}
            value={bio}
            onChangeText={setBio}
            multiline
            onBlur={validateFields}
          />
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="Digite sua data de nascimento"
            placeholderTextColor={colors.placeholder}
            value={birthdate}
            onChangeText={setBirthdate}
            onBlur={validateFields}
          />

          {/* Campos de email, telefone e RG */}
          <View style={styles.inputIconContainer}>
            <MaterialCommunityIcons name="email-outline" size={20} color={colors.icon} style={styles.icon} />
            <TextInput
              style={[styles.inputWithIcon, { color: colors.text }]}
              placeholder="Digite seu e-mail"
              placeholderTextColor={colors.placeholder}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              onBlur={validateFields}
            />
          </View>
          <View style={styles.inputIconContainer}>
            <Feather name="phone" size={20} color={colors.icon} style={styles.icon} />
            <TextInput
              style={[styles.inputWithIcon, { color: colors.text }]}
              placeholder="Digite seu telefone (WhatsApp)"
              placeholderTextColor={colors.placeholder}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              onBlur={validateFields}
            />
          </View>
          <View style={styles.inputIconContainer}>
            <MaterialCommunityIcons name="card-account-details-outline" size={20} color={colors.icon} style={styles.icon} />
            <TextInput
              style={[styles.inputWithIcon, { color: colors.text }]}
              placeholder="Digite seu RG"
              placeholderTextColor={colors.placeholder}
              value={rg}
              onChangeText={setRg}
              onBlur={validateFields}
            />
          </View>

          {/* Endereço */}
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="CEP"
            placeholderTextColor={colors.placeholder}
            value={address.cep}
            onChangeText={(text) => setAddress({ ...address, cep: text })}
            onBlur={validateFields}
          />
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="Rua"
            placeholderTextColor={colors.placeholder}
            value={address.street}
            onChangeText={(text) => setAddress({ ...address, street: text })}
            onBlur={validateFields}
          />
          <View style={styles.inlineInputs}>
            <TextInput
              style={[styles.input, styles.smallInput, { color: colors.text, borderColor: colors.border }]}
              placeholder="Nº"
              placeholderTextColor={colors.placeholder}
              value={address.number}
              onChangeText={(text) => setAddress({ ...address, number: text })}
              onBlur={validateFields}
            />
            <TextInput
              style={[styles.input, styles.largeInput, { color: colors.text, borderColor: colors.border }]}
              placeholder="Bairro"
              placeholderTextColor={colors.placeholder}
              value={address.neighborhood}
              onChangeText={(text) => setAddress({ ...address, neighborhood: text })}
              onBlur={validateFields}
            />
          </View>
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="Cidade"
            placeholderTextColor={colors.placeholder}
            value={address.city}
            onChangeText={(text) => setAddress({ ...address, city: text })}
            onBlur={validateFields}
          />

          {/* Exibir mensagem de erro, se houver */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Botão de Salvar */}
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: colors.buttonBackground }]}
            onPress={handleSaveProfile}
          >
            <Text style={[styles.addButtonText, { color: colors.buttonText }]}>SALVAR PERFIL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
