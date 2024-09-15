// src/Screens/MyRequestsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import myRequestsStyles from '../styles/myRequestsStyles'; // Importe o estilo da nova tela

const MyRequestsScreen = ({ navigation }) => {
  // Função para lidar com o clique na solicitação
  const handleRequestClick = (requestId) => {
    const requestDetails = {
      1: {
        subtitulo: '01- Árvores e Vegetação/ Outros',
        protocolo: '123456',
        data: '12/09/2024',
        hora: '14:30',
        local: 'Rua Principal, 123',
        prazo: '5 dias úteis',
        providencias: 'Em análise pela equipe responsável.',
      },
      2: {
        subtitulo: '02- Saúde e Segurança',
        protocolo: '789012',
        data: '13/09/2024',
        hora: '16:00',
        local: 'Avenida Secundária, 456',
        prazo: '7 dias úteis',
        providencias: 'Aguardando aprovação.',
      },
    };

    // Redireciona para a tela de detalhes da solicitação passando os dados necessários
    navigation.navigate('RequestDetailsScreen', requestDetails[requestId]);
  };

  return (
    <ScrollView contentContainerStyle={myRequestsStyles.container}>
      <Text style={myRequestsStyles.title}>MINHAS SOLICITAÇÕES</Text>
      <Text style={myRequestsStyles.subtitle}>CLIQUE NA SOLICITAÇÃO PARA SER DIRECIONADO</Text>
      
      <TouchableOpacity style={myRequestsStyles.requestItem} onPress={() => handleRequestClick(1)}>
        <Text style={myRequestsStyles.requestText}>01- Árvores e Vegetação/ Outros</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={myRequestsStyles.requestItem} onPress={() => handleRequestClick(2)}>
        <Text style={myRequestsStyles.requestText}>02- Saúde e Segurança</Text>
      </TouchableOpacity>

      {/* Botão de voltar para o menu principal */}
      <TouchableOpacity style={myRequestsStyles.homeButton} onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="home" size={28} color="#ffffff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MyRequestsScreen;
