import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  
  // ===================================
  // ESTILOS GLOBAIS (App.js)
  // ===================================
  globalContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    backgroundColor: '#f8f9fa',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  globalTitulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#212529',
    marginBottom: 50,
    marginTop: 20,
    textAlign: 'center',
  },
  botao: { 
    backgroundColor: '#007AFF',
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderRadius: 12,
    width: '95%', 
    maxWidth: 400, 
    alignItems: 'center', 
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  // Modal
  modalContainer: {
    flex: 1,
    padding: 15,
    paddingTop: Platform.OS === 'android' ? 30 : 50,
    backgroundColor: '#ffffff',
  },
  fecharBotao: {
    backgroundColor: '#dc3545',
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 10,
    elevation: 3,
  },
  fecharTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },


  // ===================================
  // RandomQuote (Frases)
  // ===================================
  fraseContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  fraseTitulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#495057',
    marginBottom: 40,
    marginTop: 40,
    textAlign: 'center',
  },
  fraseTexto: { 
    marginTop: 30, 
    fontSize: 20, 
    fontStyle: 'italic', 
    textAlign: 'center',
    paddingHorizontal: 15,
    lineHeight: 32,
    color: '#212529',
    backgroundColor: '#e9ecef',
    padding: 20,
    borderRadius: 10,
  },
  
  // ===================================
  // IMCCalculator (IMC)
  // ===================================
  imcContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    width: '100%',
    backgroundColor: '#f8f9fa',
  },
  imcTitulo: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 40,
    color: '#007AFF',
  },
  imcInput: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 10,
    width: '85%',
    padding: 15,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  imcResultado: { 
    marginTop: 30, 
    fontSize: 22, 
    fontWeight: '900',
    color: '#28a745',
    padding: 10,
  },
  
  // ===================================
  // TodoList (Lista de Tarefas)
  // ===================================
  todoContainer: { 
    flex: 1, 
    paddingHorizontal: 20,
    paddingTop: 40, 
  },
  todoTitulo: { 
    fontSize: 26, 
    fontWeight: '800', 
    marginBottom: 30, 
    textAlign: 'center',
    color: '#6f42c1',
  },
  todoInput: {
    borderWidth: 2,
    borderColor: '#6f42c1', 
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderLeftWidth: 5,
    borderLeftColor: '#6f42c1',
    borderRadius: 8,
    marginVertical: 8,
    elevation: 1,
  },
  todoItemText: {
    fontSize: 17,
    color: '#343a40',
    flex: 1,
  },
  todoDeleteButton: {
    padding: 8,
    marginLeft: 15,
    backgroundColor: '#ffc107',
    borderRadius: 8,
  },
  // ... Seção de outros estilos
  
  // ===================================
  // 🌡️ TemperatureConverter (Temperatura)
  // ===================================
  tempContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    width: '100%',
    backgroundColor: '#fff',
  },
  tempTitulo: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 30,
    color: '#E9724C', // Laranja quente
    textAlign: 'center',
  },
  tempLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#343a40',
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'flex-start',
    paddingLeft: '7.5%', // Alinha com o input
  },
  tempInput: {
    borderWidth: 2,
    borderColor: '#ffc107', 
    borderRadius: 10,
    width: '85%',
    padding: 15,
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#343a40',
  },
  pickerWrapper: { // Container para estilizar o Picker
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    width: '85%',
    marginBottom: 10,
    overflow: 'hidden',
  },
  tempPicker: {
    width: '100%',
    height: 50,
    color: '#343a40',
  },
  tempButton: {
    backgroundColor: '#E9724C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: '85%',
    alignItems: 'center',
    elevation: 4,
  },
  tempButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  tempResultado: { 
    marginTop: 40, 
    fontSize: 24, 
    fontWeight: '900',
    color: '#007AFF',
    padding: 10,
    textAlign: 'center',
  },


});