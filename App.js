import{ useState } from "react";
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet } from "react-native";

import IMCCalculator from "./features/imc/index.jsx"
import TemperatureConverter from "./features/temperature/index.jsx"
import RandomQuote from "./features/frases/index.jsx"
import TodoList from "./features/todolist";""
import { styles } from "./features/style.js";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [componenteAtivo, setComponenteAtivo] = useState(null);

  const microApps = [
    { nome: "Calculadora de IMC", componente: 
      IMCCalculator
     },
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
    <View style={styles.container}>
      <Text style={styles.titulo}>🧩 MicroApps</Text>

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
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.fecharBotao} onPress={fecharModal}>
            <Text style={styles.fecharTexto}>Fechar</Text>
          </TouchableOpacity>
        
          {ComponenteAtivo && <ComponenteAtivo />}
        </View>
      </Modal>
    </View>
  );
}


