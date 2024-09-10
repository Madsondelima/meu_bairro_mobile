// src/styles/loginStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 100, // Defina o tamanho desejado para o logo
    height: 100,
    marginBottom: 20,
    borderRadius: 50, // Torna a imagem redonda (se for quadrada)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#007bff',
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  registerText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  orText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
  },
  iconContainer: {
    marginRight: 12,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#6A1B9A',
    fontWeight: 'bold',
  },
  emailButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  emailButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff0000', // Vermelho para mensagens de erro
    fontSize: 14,
    marginBottom: 10,
  },
});

export default styles;