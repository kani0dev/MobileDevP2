import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoList() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return;
    setLista([...lista, { id: Date.now().toString(), texto: tarefa }]);
    setTarefa("");
  };

  const removerTarefa = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <TextInput
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={styles.input}
      />
      <Button title="Adicionar" onPress={adicionarTarefa} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removerTarefa(item.id)}>
            <Text style={styles.item}>• {item.texto}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginVertical: 4,
  },
});
