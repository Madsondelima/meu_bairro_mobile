// src/Screens/RequestDetailsScreen.js
import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import requestDetailsStyles from '../styles/requestDetailsStyles'; // Importe o estilo da tela

const RequestDetailsScreen = ({ route, navigation }) => {
  const { subtitulo, protocolo, data, hora, local, prazo, providencias } = route.params; // Recebe os dados da solicitação

  return (
    <ScrollView contentContainerStyle={requestDetailsStyles.scrollContainer}>
      <View style={requestDetailsStyles.container}>
        <Text style={requestDetailsStyles.title}>SOLICITAÇÃO</Text>
        <Text style={requestDetailsStyles.subtitle}>{subtitulo}</Text>

        <View style={requestDetailsStyles.fieldContainer}>
          <Text style={requestDetailsStyles.label}>PROTOCOLO N°</Text>
          <TextInput style={requestDetailsStyles.input} value={protocolo} editable={false} />
        </View>

        <View style={requestDetailsStyles.fieldContainer}>
          <Text style={requestDetailsStyles.label}>DATA</Text>
          <TextInput style={requestDetailsStyles.input} value={data} editable={false} />
        </View>

        <View style={requestDetailsStyles.fieldContainer}>
          <Text style={requestDetailsStyles.label}>HORA</Text>
          <TextInput style={requestDetailsStyles.input} value={hora} editable={false} />
        </View>

        <View style={requestDetailsStyles.fieldContainer}>
          <Text style={requestDetailsStyles.label}>LOCAL</Text>
          <TextInput style={requestDetailsStyles.input} value={local} editable={false} />
        </View>

        <View style={requestDetailsStyles.fieldContainer}>
          <Text style={requestDetailsStyles.label}>PRAZO</Text>
          <TextInput style={requestDetailsStyles.input} value={prazo} editable={false} />
        </View>

        <View style={requestDetailsStyles.fieldContainer}>
          <Text style={requestDetailsStyles.label}>PROVIDÊNCIAS</Text>
          <TextInput
            style={requestDetailsStyles.inputMultiline}
            value={providencias}
            multiline
            editable={false}
          />
        </View>

        {/* Botão de voltar para o menu principal */}
        <TouchableOpacity style={requestDetailsStyles.homeButton} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={28} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RequestDetailsScreen;
