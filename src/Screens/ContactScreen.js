// src/Screens/ContactScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/contactStyles'; // Estilos para a tela de contato

const ContactScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    if (email.trim() === '' || message.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Aqui você pode adicionar a lógica para enviar o e-mail
    alert('Mensagem enviada com sucesso!');
    setEmail('');
    setMessage('');
  };

  const handleWhatsApp = () => {
    const url = 'https://wa.me/?text=Olá, gostaria de entrar em contato com vocês.';
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>FALE CONOSCO</Text>
        <Text style={styles.description}>
          Para entrar em contato conosco, por favor, preencha o formulário abaixo para enviar suas perguntas,
          comentários ou sugestões.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail."
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem."
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
          <Text style={styles.sendButtonText}>ENVIAR</Text>
        </TouchableOpacity>

        <Text style={styles.whatsappText}>Ou envie sua mensagem por aqui</Text>
        <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
          <FontAwesome name="whatsapp" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
