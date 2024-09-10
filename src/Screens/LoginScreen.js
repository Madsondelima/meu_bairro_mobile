// src/Screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Ícone do Facebook
import AntDesign from 'react-native-vector-icons/AntDesign'; // Ícone do Google
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Ícone do Apple
import styles from '../styles/loginStyles'; // Importa os estilos do arquivo

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar mensagem de erro

  // Função para validar e-mail usando regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para verificar se os campos de e-mail e senha estão preenchidos e são válidos
  const handleLogin = () => {
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Lógica para autenticação (ex.: chamada para API de login)
    Alert.alert('Login realizado com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        {/* Logo do Aplicativo */}
        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <Text style={styles.title}>Bem-vindo</Text>

        {/* Campo de entrada para o e-mail */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setError(''); // Limpa o erro quando o usuário digita
          }}
        />

        {/* Campo de entrada para a senha */}
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setError(''); // Limpa o erro quando o usuário digita
          }}
        />

        {/* Mensagem de Erro */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Botão de Login */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Esqueceu a Senha */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua Senha</Text>
        </TouchableOpacity>

        {/* Texto de Registro e Botões Sociais */}
        <Text style={styles.registerText}>Ainda não tem conta? Registre-se.</Text>
        <Text style={styles.orText}>OU</Text>

        {/* Botão de Registro com Facebook */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconContainer}>
            <FontAwesome name="facebook" size={20} color="#6A1B9A" />
          </View>
          <Text style={styles.socialButtonText}>Registre-se com o Facebook</Text>
        </TouchableOpacity>

        {/* Botão de Registro com Google */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconContainer}>
            <AntDesign name="google" size={20} color="#6A1B9A" />
          </View>
          <Text style={styles.socialButtonText}>Registre-se com o Google</Text>
        </TouchableOpacity>

        {/* Botão de Registro com Apple */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="apple" size={20} color="#6A1B9A" />
          </View>
          <Text style={styles.socialButtonText}>Registre-se com a Apple</Text>
        </TouchableOpacity>

        {/* Botão para Registro com E-mail */}
        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => navigation.navigate('SignUpWithEmail')}
        >
          <Text style={styles.emailButtonText}>Registrar-se com um e-mail</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
