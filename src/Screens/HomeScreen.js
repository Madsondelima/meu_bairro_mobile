import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, DrawerLayoutAndroid, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useColorTheme } from '../context/ColorContext';

const HomeScreen = ({ navigation }) => {
  const { colors, toggleColorblindMode, applyColorblindFilter, isColorblind } = useColorTheme();
  const [profileImage, setProfileImage] = useState(null);
  const [drawer, setDrawer] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal para selecionar o tipo de daltonismo

  // Função para abrir o menu lateral
  const openDrawer = () => {
    drawer.openDrawer();
  };

  // Função para escolher imagem do dispositivo
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos da permissão para acessar suas fotos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Função para exibir o modal de seleção de filtro de daltonismo
  const openColorblindModal = () => {
    setIsModalVisible(true);
  };

  // Conteúdo do Drawer
  const drawerContent = () => (
    <View style={[styles.drawerContainer, { backgroundColor: colors.background }]}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <MaterialIcons name="person" size={80} color={colors.text} />
          )}
        </TouchableOpacity>
        <Text style={[styles.userName, { color: colors.text }]}>Nome do Usuário</Text>
        <Text style={[styles.userDetails, { color: colors.text }]}>Cidade: Santana de Parnaiba</Text>
        <Text style={[styles.userDetails, { color: colors.text }]}>Bairro: Parque Santana 2</Text>
      </View>

      <TouchableOpacity style={styles.drawerItem} onPress={openColorblindModal}>
        <MaterialIcons name="visibility" size={24} color={colors.text} />
        <Text style={[styles.drawerLabel, { color: colors.text }]}>
          {isColorblind ? 'Alterar Filtro Daltonismo' : 'Ativar Daltonismo'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => drawer.closeDrawer()}>
        <MaterialIcons name="close" size={24} color={colors.text} />
        <Text style={[styles.drawerLabel, { color: colors.text }]}>Fechar Menu</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={(ref) => setDrawer(ref)}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={drawerContent}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {/* Botão para abrir o menu lateral */}
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <MaterialIcons name="menu" size={28} color={colors.text} />
        </TouchableOpacity>

        {/* Conteúdo da tela principal */}
        <Text style={[styles.title, { color: colors.text }]}>Menu Inicial</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('RequestRegistration')}>
            <MaterialIcons name="add-circle" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Solicitar Serviço</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('EditProfile')}>
            <MaterialIcons name="person-add" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Adicionar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('ContactScreen')}>
            <MaterialIcons name="mail" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Fale Conosco</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('GalleryScreen')}>
            <MaterialIcons name="photo" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('ProfileScreen')}>
            <MaterialIcons name="account-circle" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('ServicesScreen')}>
            <MaterialIcons name="build" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('FAQScreen')}>
            <MaterialIcons name="help-outline" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Dúvidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('MyRequests')}>
            <MaterialIcons name="assignment" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Minhas Solicitações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('About')}>
            <MaterialIcons name="info" size={40} color={colors.buttonBackground} />
            <Text style={[styles.gridText, { color: colors.text }]}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Modal para seleção de tipo de daltonismo */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione o Tipo de Daltonismo</Text>
            <TouchableOpacity onPress={() => { applyColorblindFilter('deuteranopia'); setIsModalVisible(false); }}>
              <Text style={styles.modalOption}>Deuteranopia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { applyColorblindFilter('protanopia'); setIsModalVisible(false); }}>
              <Text style={styles.modalOption}>Protanopia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { applyColorblindFilter('tritanopia'); setIsModalVisible(false); }}>
              <Text style={styles.modalOption}>Tritanopia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { applyColorblindFilter(null); setIsModalVisible(false); }}>
              <Text style={styles.modalOption}>Cores Padrão</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.modalClose}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  grid: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    alignItems: 'center',
    margin: 15,
    width: 100,
  },
  gridText: {
    marginTop: 10,
    textAlign: 'center',
  },
  drawerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 14,
    color: '#777',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  drawerLabel: {
    fontSize: 16,
    marginLeft: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    fontSize: 16,
    color: '#007bff',
    paddingVertical: 10,
  },
  modalClose: {
    fontSize: 16,
    color: 'red',
    paddingVertical: 10,
    marginTop: 10,
  }
});

export default HomeScreen;
