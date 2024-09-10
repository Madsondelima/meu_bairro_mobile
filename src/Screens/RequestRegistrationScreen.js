// src/Screens/RequestRegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/requestRegistrationStyles';

const RequestRegistrationScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [error, setError] = useState(''); // Estado para mensagem de erro

  // Função para validar o número de telefone usando regex
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+?55\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/; // Regex para validar números brasileiros com DDD
    return phoneRegex.test(phone);
  };

  const handleNext = () => {
    // Verificação se todos os campos foram preenchidos
    if (!location || !number || !neighborhood || !whatsapp) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Verificação se o número de telefone é válido
    if (!isValidPhoneNumber(whatsapp)) {
      setError('Por favor, insira um número de telefone válido no formato +55 (XX) XXXXX-XXXX.');
      return;
    }

    // Limpa o erro e exibe uma mensagem de sucesso
    setError('');
    
    // Navega para a tela SelectServiceScreen
    navigation.navigate('SelectService');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CADASTRAR SOLICITAÇÃO</Text>

      <Text style={styles.sectionTitle}>ENDEREÇO DO LOCAL</Text>
      <Text style={styles.label}>Logradouro ou ponto de referência</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name="place" size={20} color="#6A1B9A" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="*Digite o nome da Av., Bairro ou Estrada"
          value={location}
          onChangeText={(text) => {
            setLocation(text);
            setError(''); // Limpa o erro ao digitar
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          placeholder="*Digite o Nº"
          value={number}
          onChangeText={(text) => {
            setNumber(text);
            setError(''); // Limpa o erro ao digitar
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          placeholder="*Digite o Bairro"
          value={neighborhood}
          onChangeText={(text) => {
            setNeighborhood(text);
            setError(''); // Limpa o erro ao digitar
          }}
        />
      </View>

      <Text style={styles.sectionTitle}>CONTATO WHATSAPP</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="whatsapp" size={20} color="#6A1B9A" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="+55 ( )Digite seu número"
          value={whatsapp}
          onChangeText={(text) => {
            setWhatsapp(text);
            setError(''); // Limpa o erro ao digitar
          }}
          keyboardType="phone-pad"
        />
      </View>

      {/* Mensagem de Erro */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>PRÓXIMA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RequestRegistrationScreen;
