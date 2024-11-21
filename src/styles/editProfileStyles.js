import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    width: '90%',
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 14,
    color: '#4A90E2',
    marginTop: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
  inputWithIcon: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInput: {
    width: '20%',
  },
  largeInput: {
    width: '75%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
