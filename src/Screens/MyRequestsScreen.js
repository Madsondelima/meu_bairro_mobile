import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorTheme } from '../context/ColorContext'; // Importa o contexto de cores
import myRequestsStyles from '../styles/myRequestsStyles'; // Importa os estilos

const MyRequestsScreen = ({ navigation }) => {
  const { colors } = useColorTheme(); // Obtém as cores dinâmicas do tema
  const [requests, setRequests] = useState([]);

  // Função para carregar solicitações do AsyncStorage
  const loadRequests = async () => {
    try {
      const savedRequests = await AsyncStorage.getItem('requests');
      if (savedRequests) {
        setRequests(JSON.parse(savedRequests));
      }
    } catch (error) {
      console.error('Erro ao carregar solicitações', error);
    }
  };

  useEffect(() => {
    // Carrega as solicitações quando o componente é montado
    loadRequests();

    // Recarrega as solicitações toda vez que a tela ganha foco
    const unsubscribe = navigation.addListener('focus', () => {
      loadRequests();
    });

    return unsubscribe;
  }, [navigation]);

  // Função para lidar com o clique na solicitação
  const handleRequestClick = (requestId) => {
    const request = requests.find((req) => req.id === requestId);
    if (request) {
      navigation.navigate('RequestDetailsScreen', { ...request });
    } else {
      Alert.alert('Erro', 'Detalhes da solicitação não encontrados.');
    }
  };

  // Renderiza cada item de solicitação
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={myRequestsStyles(colors).requestItem}
      onPress={() => handleRequestClick(item.id)}
    >
      <Text style={myRequestsStyles(colors).requestText}>{`${item.id} - ${item.title}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={myRequestsStyles(colors).container}>
      <View style={myRequestsStyles(colors).headerContainer}>
        <Text style={myRequestsStyles(colors).title}>MINHAS SOLICITAÇÕES</Text>
        <Text style={myRequestsStyles(colors).subtitle}>
          CLIQUE NA SOLICITAÇÃO PARA SER DIRECIONADO
        </Text>
      </View>

      <FlatList
        data={requests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={myRequestsStyles(colors).listContainer}
        ListEmptyComponent={
          <Text style={myRequestsStyles(colors).noRequestsText}>Nenhuma solicitação encontrada.</Text>
        }
      />

      <TouchableOpacity
        style={myRequestsStyles(colors).homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <MaterialIcons name="home" size={30} style={myRequestsStyles(colors).homeIcon} />
        <Text style={myRequestsStyles(colors).homeButtonText}>Menu Principal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyRequestsScreen;
