import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240,
    marginTop: 24,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#04D361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;
