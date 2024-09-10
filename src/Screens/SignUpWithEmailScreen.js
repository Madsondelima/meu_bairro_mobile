// src/Screens/SignUpWithEmailScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import signUpStyles from '../styles/signUpStyles';

const SignUpWithEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false); // Estado para controle do modal de termos
  const [showPrivacyModal, setShowPrivacyModal] = useState(false); // Estado para controle do modal de política de privacidade

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    if (!termsAccepted) {
      setErrorMessage('Você deve aceitar os termos e condições para continuar.');
      return;
    }

    setErrorMessage('');
    Alert.alert('Registro realizado com sucesso', `Bem-vindo, ${email}!`);

    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={signUpStyles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={signUpStyles.container}>
        <Icon name="user-plus" size={100} color="#007bff" style={signUpStyles.icon} />
        <Text style={signUpStyles.title}>Registrar-se com E-mail</Text>

        <TextInput
          style={signUpStyles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={signUpStyles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={signUpStyles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#777"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {errorMessage ? <Text style={signUpStyles.errorText}>{errorMessage}</Text> : null}

        {/* Checkbox para aceitar os termos e condições usando TouchableOpacity */}
        <View style={signUpStyles.checkboxContainer}>
          <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)} style={signUpStyles.checkbox}>
            <Icon
              name={termsAccepted ? 'check-square' : 'square-o'}
              size={24}
              color="#007bff"
            />
          </TouchableOpacity>
          <Text style={signUpStyles.checkboxText}>
            Eu aceito os{' '}
            <Text style={signUpStyles.linkText} onPress={() => setShowTermsModal(true)}>
              termos e condições
            </Text>
            {' '}e a{' '}
            <Text style={signUpStyles.linkText} onPress={() => setShowPrivacyModal(true)}>
              política de privacidade
            </Text>.
          </Text>
        </View>

        <TouchableOpacity style={signUpStyles.button} onPress={handleSignUp}>
          <Text style={signUpStyles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={signUpStyles.backToLoginText}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para Termos e Condições */}
      <Modal
        visible={showTermsModal}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setShowTermsModal(false)}
      >
        <View style={signUpStyles.modalContainer}>
          <Text style={signUpStyles.modalTitle}>Termos e Condições</Text>
          <ScrollView style={signUpStyles.modalContent}>
            <Text style={signUpStyles.modalText}>
              1. Aceitação dos Termos: Ao usar o aplicativo, você concorda com os termos e condições descritos aqui.
              2. Uso do Aplicativo: O uso do aplicativo é apenas para fins pessoais e não comerciais. Qualquer uso indevido resultará na suspensão ou encerramento de sua conta.
              3. Responsabilidades: O usuário é responsável por suas ações dentro do aplicativo. Não somos responsáveis por quaisquer danos diretos ou indiretos resultantes do uso do aplicativo.
              4. Alterações nos Termos: Podemos modificar estes termos a qualquer momento. As alterações serão comunicadas ao usuário por meio do aplicativo.
              5. Resolução de Disputas: Em caso de disputas, a legislação vigente do seu país será aplicada.
            </Text>
          </ScrollView>
          <TouchableOpacity style={signUpStyles.button} onPress={() => setShowTermsModal(false)}>
            <Text style={signUpStyles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal para Política de Privacidade */}
      <Modal
        visible={showPrivacyModal}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setShowPrivacyModal(false)}
      >
        <View style={signUpStyles.modalContainer}>
          <Text style={signUpStyles.modalTitle}>Política de Privacidade</Text>
          <ScrollView style={signUpStyles.modalContent}>
            <Text style={signUpStyles.modalText}>
              1. Coleta de Informações: Coletamos informações pessoais como nome, e-mail e informações de uso para melhorar a experiência do usuário.
              2. Uso das Informações: As informações coletadas são usadas para personalizar o conteúdo e os serviços do aplicativo.
              3. Compartilhamento de Dados: Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, exceto quando exigido por lei.
              4. Segurança: Implementamos medidas de segurança adequadas para proteger suas informações pessoais.
              5. Direitos do Usuário: Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.
              6. Alterações na Política: Podemos modificar esta política a qualquer momento. Notificaremos os usuários sobre quaisquer mudanças significativas.
            </Text>
          </ScrollView>
          <TouchableOpacity style={signUpStyles.button} onPress={() => setShowPrivacyModal(false)}>
            <Text style={signUpStyles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default SignUpWithEmailScreen;
