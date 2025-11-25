import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppWrapper({ children }) {
  const [tela, setTela] = useState("login"); // login | register | app
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // verificar login salvo
  useEffect(() => {
    verificarUsuario();
  }, []);

  const verificarUsuario = async () => {
    const user = await AsyncStorage.getItem("usuario");
    if (user) setTela("app");
  };

  const registrar = async () => {
    if (!email || !senha) return alert("Preencha todos os campos!");

    const usuario = { email, senha };
    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Conta criada com sucesso!");
    setEmail("");
    setSenha("");
    setTela("login");
  };

  const logar = async () => {
    const data = await AsyncStorage.getItem("usuario");

    if (!data) return alert("Nenhuma conta cadastrada!");

    const usuario = JSON.parse(data);

    if (usuario.email === email && usuario.senha === senha) {
      setTela("app");
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("usuario");
    setTela("login");
    setEmail("");
    setSenha("");
  };

  // ---------- TELAS ---------- //

  if (tela !== "app") {
    return (
      <View style={{ padding: 25 }}>
        <Text style={{ fontSize: 28, marginBottom: 20, textAlign: "center" }}>
          {tela === "login" ? "Login" : "Criar Conta"}
        </Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
            borderRadius: 8,
          }}
        />

        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={{
            borderWidth: 1,
            marginBottom: 20,
            padding: 10,
            borderRadius: 8,
          }}
        />

        {tela === "login" ? (
          <>
            <TouchableOpacity
              onPress={logar}
              style={{
                backgroundColor: "#4CAF50",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTela("register")} style={{ marginTop: 15 }}>
              <Text style={{ textAlign: "center" }}>Criar uma conta</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={registrar}
              style={{
                backgroundColor: "#2196F3",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTela("login")} style={{ marginTop: 15 }}>
              <Text style={{ textAlign: "center" }}>Voltar ao login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }

  // ---------- APP LIBERADO ---------- //

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={logout}
        style={{
          backgroundColor: "#f44336",
          padding: 10,
          margin: 10,
          borderRadius: 6,
          alignSelf: "flex-end",
        }}
      >
        <Text style={{ color: "#fff" }}>Logout</Text>
      </TouchableOpacity>

      {children}
    </View>
  );
}
