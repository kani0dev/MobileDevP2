import { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
// Se estiver usando Expo, você pode adicionar este import para ícones:
// import { AntDesign } from '@expo/vector-icons'; 

import IMCCalculator from "./features/imc/index.jsx";
import TemperatureConverter from "./features/temperature/index.jsx";
import RandomQuote from "./features/frases/index.jsx";
import TodoList from "./features/todolist";
import { styles } from "./features/style.js"; // Importa os estilos que definiremos abaixo

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [componenteAtivo, setComponenteAtivo] = useState(null);

  const microApps = [
    { nome: "Calculadora de IMC", componente: IMCCalculator },
    { nome: "Conversor de Temperatura", componente: TemperatureConverter },
    { nome: "Gerador de Frases", componente: RandomQuote },
    { nome: "To-Do List", componente: TodoList },
  ];

  const abrirMicroApp = (Componente) => {
    setComponenteAtivo(() => Componente);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setComponenteAtivo(null);
  };

  const ComponenteAtivo = componenteAtivo;

  return (
    <View style={styles.globalContainer}>
      <Text style={styles.titulo}>🚀 MicroApps</Text>

      {microApps.map((app, index) => (
        <TouchableOpacity
          key={index}
          style={styles.botao}
          onPress={() => abrirMicroApp(app.componente)}
        >
          <Text style={styles.textoBotao}>{app.nome}</Text>
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={fecharModal}
        transparent={false} // Garante que o modal ocupe toda a tela
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.fecharBotao} 
            onPress={fecharModal}
            // Adicionado um padding extra para facilitar o clique
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} 
          >
            {/* Se estiver usando expo, descomente abaixo */}
            {/* <AntDesign name="closecircle" size={30} color="#6c757d" /> */}
            <Text style={styles.fecharTexto}>X Fechar</Text> 
          </TouchableOpacity>
        
          {ComponenteAtivo && <ComponenteAtivo />}
        </View>
      </Modal>
    </View>
  );
}