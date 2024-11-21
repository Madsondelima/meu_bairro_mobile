import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase Auth
import { auth } from "../config/firebaseConfig"; // Firebase Configuration
import signUpStyles from "../styles/signUpStyles"; // Custom styles
import { useColorTheme } from "../context/ColorContext"; // Accessibility context for color themes

const SignUpWithEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const { colors } = useColorTheme(); // Dynamic colors for themes

  // Basic email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle user registration
  const handleSignUp = async () => {
    setErrorMessage(""); // Clear error message
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    if (!termsAccepted) {
      setErrorMessage(
        "Você deve aceitar os Termos e a Política de Privacidade para continuar."
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso", "Conta criada com sucesso! Agora você pode fazer login.");
      navigation.navigate("Login"); // Navigate to login screen
    } catch (error) {
      console.error("Erro ao registrar-se:", error);
      setErrorMessage(
        error.message ||
          "Ocorreu um erro ao criar a conta. Por favor, tente novamente."
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        signUpStyles.scrollContainer,
        { backgroundColor: colors.background },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[signUpStyles.container, { backgroundColor: colors.background }]}
      >
        <Icon
          name="user-plus"
          size={100}
          color={colors.iconColor}
          style={signUpStyles.icon}
        />
        <Text style={[signUpStyles.title, { color: colors.text }]}>
          Registrar-se
        </Text>

        {/* Input for email */}
        <TextInput
          style={[
            signUpStyles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          placeholder="Digite seu e-mail"
          placeholderTextColor={colors.placeholderText}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Input for password */}
        <TextInput
          style={[
            signUpStyles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          placeholder="Digite sua senha"
          placeholderTextColor={colors.placeholderText}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Input for password confirmation */}
        <TextInput
          style={[
            signUpStyles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          placeholder="Confirme sua senha"
          placeholderTextColor={colors.placeholderText}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Error message */}
        {errorMessage ? (
          <Text style={[signUpStyles.errorText, { color: colors.error }]}>
            {errorMessage}
          </Text>
        ) : null}

        {/* Terms and Privacy acceptance */}
        <View style={signUpStyles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setTermsAccepted(!termsAccepted)}
            style={signUpStyles.checkbox}
          >
            <Icon
              name={termsAccepted ? "check-square" : "square-o"}
              size={24}
              color={colors.checkbox}
            />
          </TouchableOpacity>
          <Text style={[signUpStyles.checkboxText, { color: colors.text }]}>
            Eu aceito os{" "}
            <Text
              style={signUpStyles.linkText}
              onPress={() => setShowTermsModal(true)}
            >
              Termos e Condições
            </Text>{" "}
            e a{" "}
            <Text
              style={signUpStyles.linkText}
              onPress={() => setShowPrivacyModal(true)}
            >
              Política de Privacidade
            </Text>
            .
          </Text>
        </View>

        {/* Register button */}
        <TouchableOpacity
          style={[
            signUpStyles.button,
            { backgroundColor: colors.buttonBackground },
          ]}
          onPress={handleSignUp}
        >
          <Text style={[signUpStyles.buttonText, { color: colors.buttonText }]}>
            Registrar
          </Text>
        </TouchableOpacity>

        {/* Link to navigate to Login */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[signUpStyles.backToLoginText, { color: colors.link }]}>
            Já tem uma conta? Faça Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions Modal */}
      <Modal
        visible={showTermsModal}
        animationType="slide"
        onRequestClose={() => setShowTermsModal(false)}
      >
        <View
          style={[
            signUpStyles.modalContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Text style={[signUpStyles.modalTitle, { color: colors.text }]}>
            Termos e Condições
          </Text>
          <ScrollView style={signUpStyles.modalContent}>
            <Text style={[signUpStyles.modalText, { color: colors.text }]}>
              {/* Insert terms and conditions here */}
              Aqui estão os termos e condições de uso...
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={[
              signUpStyles.button,
              { backgroundColor: colors.buttonBackground },
            ]}
            onPress={() => setShowTermsModal(false)}
          >
            <Text style={[signUpStyles.buttonText, { color: colors.buttonText }]}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        visible={showPrivacyModal}
        animationType="slide"
        onRequestClose={() => setShowPrivacyModal(false)}
      >
        <View
          style={[
            signUpStyles.modalContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Text style={[signUpStyles.modalTitle, { color: colors.text }]}>
            Política de Privacidade
          </Text>
          <ScrollView style={signUpStyles.modalContent}>
            <Text style={[signUpStyles.modalText, { color: colors.text }]}>
              {/* Insert privacy policy here */}
              Aqui está a política de privacidade do app...
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={[
              signUpStyles.button,
              { backgroundColor: colors.buttonBackground },
            ]}
            onPress={() => setShowPrivacyModal(false)}
          >
            <Text style={[signUpStyles.buttonText, { color: colors.buttonText }]}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default SignUpWithEmailScreen;
