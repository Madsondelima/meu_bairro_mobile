import { StyleSheet } from 'react-native';

const myRequestsStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: colors.background,
    },
    headerContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.text,
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      color: colors.subtitle || colors.text,
      marginBottom: 20,
    },
    listContainer: {
      width: '90%',
      alignItems: 'center',
    },
    requestItem: {
      backgroundColor: colors.buttonBackground || '#007bff',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginVertical: 8,
      width: '100%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
    },
    requestText: {
      color: colors.buttonText || '#ffffff',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: '500',
    },
    noRequestsText: {
      fontSize: 16,
      textAlign: 'center',
      color: colors.subtitle || colors.text,
      marginTop: 20,
    },
    homeButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.buttonBackground || '#007bff',
      borderRadius: 25,
      paddingHorizontal: 20,
      paddingVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 10,
    },
    homeIcon: {
      color: colors.buttonText || '#ffffff',
      fontSize: 24,
      marginRight: 5,
    },
    homeButtonText: {
      color: colors.buttonText || '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default myRequestsStyles;
