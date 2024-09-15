// src/Screens/SelectServiceScreen.js
import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/selectServiceStyles';

const SelectServiceScreen = ({ navigation }) => {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]); // Estado para múltiplas seleções

  const toggleServiceOptions = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      // Se a opção já estiver selecionada, removê-la
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      // Se a opção não estiver selecionada, adicioná-la
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      navigation.navigate('ProblemDetailsScreen', { selectedProblems: selectedOptions });
    } else {
      alert('Por favor, selecione pelo menos um serviço.');
    }
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>SELECIONE O SERVIÇO</Text>

      <View style={styles.serviceContainer}>
        {/* Serviço: Árvores e Vegetação */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('arvores')}>
          <MaterialIcons name="park" size={24} color="#4CAF50" />
          <Text style={styles.serviceText}>Árvores e Vegetação</Text>
          <MaterialIcons name={expandedService === 'arvores' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'arvores' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('ArvoreCaida')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('ArvoreCaida') ? '🔘 ' : '⚪ '}Árvore caída na via
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('GalhosBaixos')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('GalhosBaixos') ? '🔘 ' : '⚪ '}Árvore com galhos baixos ou podres
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('RaizesCalcada')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('RaizesCalcada') ? '🔘 ' : '⚪ '}Interferência de raízes na calçada ou via
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('VegetacaoVia')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('VegetacaoVia') ? '🔘 ' : '⚪ '}Invasão de vegetação na via
              </Text>
            </Pressable>
          </View>
        )}

        {/* Serviço: Pavimentação e Estrutura */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('pavimentacao')}>
          <MaterialCommunityIcons name="road" size={24} color="#795548" />
          <Text style={styles.serviceText}>Pavimentação e Estrutura</Text>
          <MaterialIcons name={expandedService === 'pavimentacao' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'pavimentacao' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('BuracoPavimentacao')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('BuracoPavimentacao') ? '🔘 ' : '⚪ '}Buraco na pavimentação
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('CalcadaQuebrada')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('CalcadaQuebrada') ? '🔘 ' : '⚪ '}Calçada quebrada
              </Text>
            </Pressable>
          </View>
        )}

        {/* Serviço: Sinalização e Equipamentos */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('sinalizacao')}>
          <MaterialIcons name="traffic" size={24} color="#FFC107" />
          <Text style={styles.serviceText}>Sinalização e Equipamentos</Text>
          <MaterialIcons name={expandedService === 'sinalizacao' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'sinalizacao' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('SemaforoDefeito')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('SemaforoDefeito') ? '🔘 ' : '⚪ '}Semáforo com defeito
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('PlacaDanificada')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('PlacaDanificada') ? '🔘 ' : '⚪ '}Placa de trânsito danificada
              </Text>
            </Pressable>
          </View>
        )}

        {/* Serviço: Serviços Públicos */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('servicosPublicos')}>
          <MaterialIcons name="plumbing" size={24} color="#FF9800" />
          <Text style={styles.serviceText}>Serviços Públicos</Text>
          <MaterialIcons name={expandedService === 'servicosPublicos' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'servicosPublicos' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('VazamentoAgua')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('VazamentoAgua') ? '🔘 ' : '⚪ '}Vazamento de água
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('IluminacaoPublica')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('IluminacaoPublica') ? '🔘 ' : '⚪ '}Problemas com iluminação pública
              </Text>
            </Pressable>
          </View>
        )}

        {/* Serviço: Naturais e Ambientais */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('naturaisAmbientais')}>
          <MaterialIcons name="eco" size={24} color="#4CAF50" />
          <Text style={styles.serviceText}>Naturais e Ambientais</Text>
          <MaterialIcons name={expandedService === 'naturaisAmbientais' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'naturaisAmbientais' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('DeslizamentoTerra')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('DeslizamentoTerra') ? '🔘 ' : '⚪ '}Deslizamento de terra
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('Poluicao')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('Poluicao') ? '🔘 ' : '⚪ '}Poluição do ar ou água
              </Text>
            </Pressable>
          </View>
        )}

        {/* Serviço: Trânsito e Mobilidade */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('transitoMobilidade')}>
          <MaterialIcons name="commute" size={24} color="#FF5722" />
          <Text style={styles.serviceText}>Trânsito e Mobilidade</Text>
          <MaterialIcons name={expandedService === 'transitoMobilidade' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'transitoMobilidade' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('Congestionamento')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('Congestionamento') ? '🔘 ' : '⚪ '}Congestionamento
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('FaixaPedestre')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('FaixaPedestre') ? '🔘 ' : '⚪ '}Faixa de pedestre apagada
              </Text>
            </Pressable>
          </View>
        )}

        {/* Serviço: Saúde e Segurança */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('saudeSeguranca')}>
          <MaterialIcons name="medical-services" size={24} color="#E91E63" />
          <Text style={styles.serviceText}>Saúde e Segurança</Text>
          <MaterialIcons name={expandedService === 'saudeSeguranca' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'saudeSeguranca' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('PostoFechado')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('PostoFechado') ? '🔘 ' : '⚪ '}Posto de saúde fechado
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('FaltaMedicamentos')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('FaltaMedicamentos') ? '🔘 ' : '⚪ '}Falta de medicamentos
              </Text>
            </Pressable>
          </View>
        )}

        {/* Serviço: Outros Problemas */}
        <Pressable style={styles.serviceButton} onPress={() => toggleServiceOptions('outrosProblemas')}>
          <MaterialIcons name="delete" size={24} color="#FFEB3B" />
          <Text style={styles.serviceText}>Outros Problemas</Text>
          <MaterialIcons name={expandedService === 'outrosProblemas' ? 'expand-less' : 'expand-more'} size={16} color="#000" />
        </Pressable>
        {expandedService === 'outrosProblemas' && (
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('ColetaLixo')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('ColetaLixo') ? '🔘 ' : '⚪ '}Coleta de lixo não realizada
              </Text>
            </Pressable>
            <Pressable style={styles.optionButton} onPress={() => toggleOption('OutrosProblemasDiversos')}>
              <Text style={styles.optionText}>
                {selectedOptions.includes('OutrosProblemasDiversos') ? '🔘 ' : '⚪ '}Outros problemas diversos
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* Botão Próxima */}
      <Pressable
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>PRÓXIMA</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SelectServiceScreen;
