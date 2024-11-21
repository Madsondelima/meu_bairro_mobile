import { StyleSheet } from 'react-native';

const galleryStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: colors.text,
    },
    grid: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      margin: 8,
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    deleteButton: {
      position: 'absolute',
      top: 5,
      right: 5,
      backgroundColor: 'rgba(255, 0, 0, 0.7)',
      borderRadius: 12,
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    homeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: colors.buttonBackground,
      borderRadius: 30,
      paddingHorizontal: 15,
      paddingVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
    },
    homeButtonText: {
      color: colors.buttonText,
      fontSize: 16,
      marginLeft: 8,
    },
    emptyText: {
      textAlign: 'center',
      fontSize: 18,
      color: colors.text,
      marginTop: 50,
    },
  });

export default galleryStyles;
