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
    <View style={styles.imcContainer}>
      <Text style={styles.imcTitulo}>Calculadora de IMC</Text>
      <TextInput
        placeholder="Peso (kg)"
        keyboardType="numeric"
        style={styles.imcInput}
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        placeholder="Altura (m)"
        keyboardType="numeric"
        style={styles.imcInput}
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && <Text style={styles.imcResultado}>IMC: {resultado}</Text>}
    </View>
  );
}

