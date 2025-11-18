import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "../style";

export default function IMCCalculator() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    if (p > 0 && a > 0) {
      const imc = p / (a * a);
      setResultado(imc.toFixed(2));
    } else {
      setResultado("Valores inválidos!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        placeholder="Peso (kg)"
        keyboardType="numeric"
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        placeholder="Altura (m)"
        keyboardType="numeric"
        style={styles.input}
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && <Text style={styles.resultado}>IMC: {resultado}</Text>}
    </View>
  );
}

