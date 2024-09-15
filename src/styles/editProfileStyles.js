// src/styles/editProfileStyles.js
import { StyleSheet } from 'react-native';

const colors = {
  primary: '#007bff',
  secondary: '#6A1B9A',
  lightGray: '#F0F0F0',
  darkGray: '#333333',
  mediumGray: '#666666',
  border: '#dddddd',
  white: '#ffffff',
};

const commonStyles = {
  borderRadius: 5,
  padding: 10,
  fontSize: 16,
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.darkGray,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: colors.mediumGray,
  },
  input: {
    width: '100%',
    ...commonStyles,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 15,
    color: colors.darkGray,
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  inputWithIcon: {
    flex: 1,
    ...commonStyles,
    borderColor: colors.border,
    borderWidth: 1,
    color: colors.darkGray,
  },
  uploadButtonSmall: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: colors.lightGray,
    borderRadius: commonStyles.borderRadius,
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallInput: {
    flex: 1,
    marginRight: 5,
  },
  largeInput: {
    flex: 2,
    marginLeft: 5,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: commonStyles.borderRadius,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  addButtonText: {
    color: colors.white,
    fontSize: commonStyles.fontSize,
    fontWeight: 'bold',
  },
});

export default styles;
