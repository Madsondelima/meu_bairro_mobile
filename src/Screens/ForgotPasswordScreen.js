// src/Screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import forgotPasswordStyles from '../styles/forgotPasswordStyles'; // Importa os estilos

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    // Expressão regular para validar o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleResetPassword = () => {
    // Verifica se o campo de e-mail está preenchido
    if (!email.trim()) {
      setErrorMessage('Por favor, preencha o campo de e-mail.');
      setSuccessMessage('');
      return;
    }

    // Verifica se o e-mail é válido
    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      setSuccessMessage('');
      return;
    }

    // Limpa a mensagem de erro e exibe mensagem de sucesso se o e-mail for válido
    setErrorMessage('');
    setSuccessMessage('Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail.');

    // Aqui, você incluiria a lógica para enviar o e-mail para o backend
    // Por exemplo, fazer uma chamada de API para iniciar o processo de redefinição de senha
  };

  return (
    <ScrollView contentContainerStyle={forgotPasswordStyles.scrollContainer}>
      <View style={forgotPasswordStyles.container}>
        <Icon name="lock" size={100} color="#007bff" style={forgotPasswordStyles.icon} />
        <Text style={forgotPasswordStyles.title}>Redefinir Senha</Text>
        <Text style={forgotPasswordStyles.description}>
          Por favor, digite seu e-mail para receber um link de redefinição de senha.
        </Text>

        {/* Campo de entrada para o e-mail */}
        <TextInput
          style={forgotPasswordStyles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Exibe mensagem de erro se houver */}
        {errorMessage ? <Text style={forgotPasswordStyles.errorText}>{errorMessage}</Text> : null}

        {/* Exibe mensagem de sucesso se houver */}
        {successMessage ? <Text style={forgotPasswordStyles.successText}>{successMessage}</Text> : null}

        {/* Botão para enviar e-mail de redefinição de senha */}
        <TouchableOpacity style={forgotPasswordStyles.button} onPress={handleResetPassword}>
          <Text style={forgotPasswordStyles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        {/* Botão para voltar para a tela de login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={forgotPasswordStyles.backToLoginText}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
