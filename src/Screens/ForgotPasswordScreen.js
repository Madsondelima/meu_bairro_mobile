// src/Screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import forgotPasswordStyles from '../styles/forgotPasswordStyles'; // Importa os estilos
import { useColorTheme } from '../context/ColorContext'; // Importa o contexto de cores
import api from '../services/api'; // Instância do Axios configurada

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { colors } = useColorTheme(); // Obtém as cores do tema dinâmico

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o e-mail
    return emailRegex.test(email);
  };

  const handleResetPassword = async () => {
    if (!email.trim()) {
      setErrorMessage('Por favor, preencha o campo de e-mail.');
      setSuccessMessage('');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      setSuccessMessage('');
      return;
    }

    try {
      // Faz uma requisição ao backend para enviar o e-mail de redefinição de senha
      const response = await api.post('/reset-password', { email });
      
      if (response.data.success) {
        setSuccessMessage('Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail.');
        setErrorMessage('');
      } else {
        setErrorMessage('Falha ao enviar e-mail de redefinição.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Erro ao enviar e-mail de redefinição: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <ScrollView contentContainerStyle={[forgotPasswordStyles.scrollContainer, { backgroundColor: colors.background }]}>
      <View style={[forgotPasswordStyles.container, { backgroundColor: colors.background }]}>
        <Icon name="lock" size={100} color={colors.iconColor} style={forgotPasswordStyles.icon} />
        <Text style={[forgotPasswordStyles.title, { color: colors.text }]}>Redefinir Senha</Text>
        <Text style={[forgotPasswordStyles.description, { color: colors.text }]}>
          Por favor, digite seu e-mail para receber um link de redefinição de senha.
        </Text>

        {/* Campo de entrada para o e-mail */}
        <TextInput
          style={[forgotPasswordStyles.input, { borderColor: colors.inputBorder }]}
          placeholder="Digite seu e-mail"
          placeholderTextColor={colors.placeholder}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Exibe mensagem de erro se houver */}
        {errorMessage ? <Text style={[forgotPasswordStyles.errorText, { color: colors.error }]}>{errorMessage}</Text> : null}

        {/* Exibe mensagem de sucesso se houver */}
        {successMessage ? <Text style={[forgotPasswordStyles.successText, { color: colors.success }]}>{successMessage}</Text> : null}

        {/* Botão para enviar e-mail de redefinição de senha */}
        <TouchableOpacity style={[forgotPasswordStyles.button, { backgroundColor: colors.buttonBackground }]} onPress={handleResetPassword}>
          <Text style={[forgotPasswordStyles.buttonText, { color: colors.buttonText }]}>Enviar</Text>
        </TouchableOpacity>

        {/* Botão para voltar para a tela de login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[forgotPasswordStyles.backToLoginText, { color: colors.link }]}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
