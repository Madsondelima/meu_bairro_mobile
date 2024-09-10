// src/Screens/EditProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/editProfileStyles';

const EditProfileScreen = ({ navigation }) => {
  // Estados para armazenar dados do perfil
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rg, setRg] = useState('');
  const [address, setAddress] = useState({ cep: '', street: '', number: '', neighborhood: '', city: '' });

  // Função para salvar o perfil e verificar os campos preenchidos
  const handleSaveProfile = () => {
    if (!name || !username || !bio || !birthdate || !email || !phone || !rg || !address.cep || !address.street || !address.number || !address.neighborhood || !address.city) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de adicionar.');
      return;
    }

    // Exibe uma mensagem de sucesso e navega para a tela de perfil
    Alert.alert('Sucesso', 'Perfil salvo com sucesso!');
    navigation.navigate('ProfileScreen'); // Navegar para a tela de perfil
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>EDITAR PERFIL</Text>
        
        {/* Carregar Foto */}
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <MaterialIcons name="photo-camera" size={30} color="#666" />
          </TouchableOpacity>
          <Text style={styles.uploadText}>Carregar Foto</Text>
        </View>

        {/* Formulário de Edição */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Escreva sobre você"
          value={bio}
          onChangeText={setBio}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua data de nascimento"
          value={birthdate}
          onChangeText={setBirthdate}
        />
        <View style={styles.inputIconContainer}>
          <FontAwesome name="envelope" size={20} color="#6A1B9A" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputIconContainer}>
          <FontAwesome name="whatsapp" size={20} color="#6A1B9A" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Digite seu telefone (WhatsApp)"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputIconContainer}>
          <FontAwesome name="id-card" size={20} color="#6A1B9A" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Digite seu RG e envie uma foto"
            value={rg}
            onChangeText={setRg}
          />
          <TouchableOpacity style={styles.uploadButtonSmall}>
            <MaterialIcons name="photo-camera" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Endereço */}
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={address.cep}
          onChangeText={(text) => setAddress({ ...address, cep: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Rua"
          value={address.street}
          onChangeText={(text) => setAddress({ ...address, street: text })}
        />
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="Nº"
            value={address.number}
            onChangeText={(text) => setAddress({ ...address, number: text })}
          />
          <TextInput
            style={[styles.input, styles.largeInput]}
            placeholder="Bairro"
            value={address.neighborhood}
            onChangeText={(text) => setAddress({ ...address, neighborhood: text })}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={address.city}
          onChangeText={(text) => setAddress({ ...address, city: text })}
        />

        {/* Botão de Adicionar */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('ProfileScreen')} // Navegação para a tela de perfil
        >
          <Text style={styles.addButtonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;
