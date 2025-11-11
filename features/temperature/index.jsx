import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [kelvin, setKelvin] = useState(null);

  const converter = () => {
    const c = parseFloat(celsius);
    if (!isNaN(c)) {
      setKelvin((c + 273.15).toFixed(2));
    } else {
      setKelvin("Valor inválido");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor °C → K</Text>
      <TextInput
        placeholder="Temperatura em °C"
        keyboardType="numeric"
        style={styles.input}
        value={celsius}
        onChangeText={setCelsius}
      />
      <Button title="Converter" onPress={converter} />
      {kelvin && <Text style={styles.resultado}>{kelvin} K</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    padding: 8,
    marginBottom: 10,
    textAlign: "center",
  },
  resultado: { marginTop: 10, fontSize: 18 },
});
