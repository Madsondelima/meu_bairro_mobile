import { StyleSheet } from 'react-native';

const profileStyles = (colors) =>
  StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: colors.background,
    },
    container: {
      width: '90%',
      backgroundColor: colors.cardBackground || '#fff',
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: colors.imageBackground || '#e0e0e0',
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      // elevation: 5, // Removido para evitar o erro
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.text,
      marginBottom: 5,
    },
    profileName: {
      fontSize: 16,
      color: colors.textSecondary || '#777',
      textAlign: 'center',
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      alignSelf: 'flex-start',
      marginBottom: 5,
    },
    bioTextInput: {
      width: '100%',
      backgroundColor: colors.inputBackground || '#f9f9f9',
      borderRadius: 10,
      padding: 15,
      fontSize: 16,
      color: colors.text,
      borderColor: colors.border || '#ccc',
      borderWidth: 1,
      textAlignVertical: 'top',
      marginBottom: 10,
    },
    characterCount: {
      alignSelf: 'flex-end',
      fontSize: 12,
      color: colors.textSecondary || '#777',
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: colors.buttonBackground || '#007bff',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 25,
      alignItems: 'center',
      width: '45%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    buttonText: {
      color: colors.buttonText || '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    imageGallery: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    galleryImage: {
      width: '30%',
      height: 100,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: colors.imageBackground || '#e0e0e0',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      // elevation: 3, // Removido para evitar o erro
    },
  });

export default profileStyles;
