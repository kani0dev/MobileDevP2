import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker"; // IMPORTANTE
import { styles } from "../style";

export default function TemperatureConverter() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [unidadeOrigem, setUnidadeOrigem] = useState("celsius");
  const [unidadeDestino, setUnidadeDestino] = useState("kelvin");

  const converterTemp = () => {
    const num = parseFloat(valor);
    if (isNaN(num)) {
      setResultado("Valor inválido");
      return;
    }

    let tempEmCelsius;

    // Converter origem → Celsius
    switch (unidadeOrigem) {
      case "celsius":
        tempEmCelsius = num;
        break;

      case "kelvin":
        tempEmCelsius = num - 273.15;
        break;

      case "fahrenheit":
        tempEmCelsius = (num - 32) * 5/9;
        break;
    }

    let final;

    // Converter Celsius → destino
    switch (unidadeDestino) {
      case "celsius":
        final = tempEmCelsius;
        break;

      case "kelvin":
        final = tempEmCelsius + 273.15;
        break;

      case "fahrenheit":
        final = tempEmCelsius * 9/5 + 32;
        break;
    }

    setResultado(final.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Temperatura</Text>

      {/* Picker da unidade de origem */}
      <Text style={styles.label}>De:</Text>
      <Picker
        selectedValue={unidadeOrigem}
        onValueChange={(v) => setUnidadeOrigem(v)}
        style={styles.picker}
      >
        <Picker.Item label="Celsius (°C)" value="celsius" />
        <Picker.Item label="Kelvin (K)" value="kelvin" />
        <Picker.Item label="Fahrenheit (°F)" value="fahrenheit" />
      </Picker>

      {/* Picker da unidade de destino */}
      <Text style={styles.label}>Para:</Text>
      <Picker
        selectedValue={unidadeDestino}
        onValueChange={(v) => setUnidadeDestino(v)}
        style={styles.picker}
      >
        <Picker.Item label="Celsius (°C)" value="celsius" />
        <Picker.Item label="Kelvin (K)" value="kelvin" />
        <Picker.Item label="Fahrenheit (°F)" value="fahrenheit" />
      </Picker>

      <TextInput
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
      />

      <Button title="Converter" onPress={converterTemp} />

      {resultado && (
        <Text style={styles.resultado}>
          Resultado: {resultado}
        </Text>
      )}
    </View>
  );
}
