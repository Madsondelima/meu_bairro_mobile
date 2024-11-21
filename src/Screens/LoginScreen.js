import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/loginStyles';
import api from '../services/api'; // Backend API
import auth from '@react-native-firebase/auth'; // Firebase Authentication

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Função para login com Firebase Authentication
  const handleLogin = async () => {
    setError(''); // Limpa erros anteriores
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const token = await userCredential.user.getIdToken(); // Obtém o token do usuário
      await AsyncStorage.setItem('authToken', token); // Salva o token localmente
      console.log('Login bem-sucedido:', userCredential.user);
      Alert.alert('Login realizado com sucesso', 'Bem-vindo de volta!');
      navigation.navigate('Home'); // Redireciona para a tela principal
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  // Função para login com Google
  const handleGoogleLogin = async () => {
    try {
      const { idToken } = await auth().signInWithPopup(auth.GoogleAuthProvider());
      await AsyncStorage.setItem('authToken', idToken);
      Alert.alert('Login com Google realizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      Alert.alert('Erro', 'Falha no login com Google.');
    }
  };

  // Função para login com Facebook
  const handleFacebookLogin = async () => {
    try {
      const { accessToken } = await auth().signInWithPopup(auth.FacebookAuthProvider());
      await AsyncStorage.setItem('authToken', accessToken);
      Alert.alert('Login com Facebook realizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro no login com Facebook:', error);
      Alert.alert('Erro', 'Falha no login com Facebook.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bem-vindo</Text>

        {/* Campo de e-mail */}
        <View style={styles.inputIconContainer}>
          <FontAwesome5 name="envelope" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Campo de senha */}
        <View style={styles.passwordContainer}>
          <FontAwesome5 name="lock" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Botão de Login */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Redefinir senha */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua Senha?</Text>
        </TouchableOpacity>

        {/* Registro */}
        <Text style={styles.registerText}>
          Ainda não tem conta?{' '}
          <Text style={styles.registerLink} onPress={() => navigation.navigate('SignUp')}>
            Registre-se
          </Text>
          .
        </Text>
        <Text style={styles.orText}>OU</Text>

        {/* Login com Facebook */}
        <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
          <FontAwesome5 name="facebook" size={20} color="#ffffff" />
          <Text style={styles.socialButtonText}>Entrar com o Facebook</Text>
        </TouchableOpacity>

        {/* Login com Google */}
        <TouchableOpacity style={styles.socialButtonGoogle} onPress={handleGoogleLogin}>
          <FontAwesome5 name="google" size={20} color="#ffffff" />
          <Text style={styles.socialButtonText}>Entrar com o Google</Text>
        </TouchableOpacity>

        {/* Registrar com e-mail */}
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
