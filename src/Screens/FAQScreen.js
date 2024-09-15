// src/Screens/FAQScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/faqStyles'; // Estilos atualizados para a tela de dúvidas

const FAQScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>DÚVIDAS</Text>
        <Text style={styles.description}>
          O que é o app "Meu Bairro"?{'\n'}
          - É uma plataforma digital para reportar problemas urbanos e solicitar serviços públicos.{'\n\n'}
          
          Para que serve o app "Meu Bairro"?{'\n'}
          - Facilita a comunicação entre cidadãos e órgãos públicos para melhorar a gestão urbana.{'\n\n'}
          
          Quais problemas posso reportar pelo app?{'\n'}
          - Buracos nas ruas, iluminação deficiente, vazamentos de água, desmoronamentos e outros.{'\n\n'}
          
          Como envio uma solicitação?{'\n'}
          - Basta abrir o app, descrever o problema, enviar uma foto e a localização.{'\n\n'}
          
          O app é gratuito?{'\n'}
          - Sim, o uso do app é totalmente gratuito para os cidadãos.{'\n\n'}
          
          Quem responde às minhas solicitações?{'\n'}
          - As solicitações são encaminhadas aos órgãos públicos responsáveis.{'\n\n'}
          
          Como acompanho o status da minha solicitação?{'\n'}
          - Você pode acompanhar o status diretamente no app, na seção "Minhas Solicitações".{'\n\n'}
          
          Preciso me registrar para usar o app?{'\n'}
          - Sim, é necessário um breve registro para personalizar e acompanhar suas solicitações.{'\n\n'}
          
          O app está disponível para todas as cidades?{'\n'}
          - Inicialmente, o app será lançado em cidades específicas e gradualmente expandido.{'\n\n'}
          
          Como o app garante a privacidade dos meus dados?{'\n'}
          - O app utiliza criptografia e segue rigorosas políticas de proteção de dados para garantir sua privacidade.
        </Text>
        
        {/* Botão de Navegação para o Menu Principal */}
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>🏠</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FAQScreen;
