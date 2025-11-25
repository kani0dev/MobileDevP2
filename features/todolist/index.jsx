import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../style";
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
    <View style={styles.todoContainer}>
      <Text style={styles.todoTitulo}>Lista de Tarefas</Text>
      <TextInput
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={styles.todoInput}
      />
      <Button title="Adicionar" onPress={adicionarTarefa} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removerTarefa(item.id)}>
            <Text style={styles.todoItem}>• {item.texto}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}