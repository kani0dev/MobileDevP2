import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function RandomQuote() {
  const frases = [
    "A persistência é o caminho do êxito.",
    "Acredite em si mesmo e vá em frente.",
    "O sucesso nasce do querer.",
    "Nunca é tarde para recomeçar.",
    "Cada erro é uma lição."
  ];

  const [frase, setFrase] = useState("");

  const gerarFrase = () => {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(aleatoria);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerador de Frases</Text>
      <Button title="Nova frase" onPress={gerarFrase} />
      {frase ? <Text style={styles.frase}>{frase}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  frase: { marginTop: 20, fontSize: 16, fontStyle: "italic", textAlign: "center" },
});
