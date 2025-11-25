import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import App from "./App";

export default function LoginWithRegister() {
  const [logado, setLogado] = useState(false);
  const [modoCadastro, setModoCadastro] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  // verifica se já existe user logado
  useEffect(() => {
    const verificarLogin = async () => {
      // Use o mesmo nome de chave para o usuário logado
      const user = await AsyncStorage.getItem("logado");
      if (user) setLogado(true);
    };
    verificarLogin();
  }, []);

  // cadastrar um novo usuário
  const registrar = async () => {
    if (!usuario || !senha) {
      alert("Preencha usuário e senha");
      return;
    }

    const usuariosSalvos = await AsyncStorage.getItem("usuarios");
    const lista = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    if (lista.find((u) => u.usuario === usuario)) {
      alert("Usuário já existe!");
      return;
    }

    const novoUser = [...lista, { usuario, senha }];
    await AsyncStorage.setItem("usuarios", JSON.stringify(novoUser));

    alert("Usuário cadastrado com sucesso!");
    setModoCadastro(false);
    setUsuario("");
    setSenha("");
  };

  // login
  const fazerLogin = async () => {
    const usuariosSalvos = await AsyncStorage.getItem("usuarios");
    const lista = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    const existe = lista.find(
      (u) => u.usuario === usuario && u.senha === senha
    );

    if (!existe) {
      alert("Usuário ou senha incorretos");
      return;
    }

    await AsyncStorage.setItem("logado", usuario); // Salva o nome de usuário como logado
    setLogado(true);
  };

  // logout
  const sair = async () => {
    await AsyncStorage.removeItem("logado");
    setLogado(false);
    setUsuario(""); // Limpa o estado após o logout
    setSenha("");
  };

  // ------------------
  // UI não logado
  // ------------------
  if (!logado) {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>{modoCadastro ? "Criar Conta" : "Entrar"}</Text>

          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          {!modoCadastro && (
            <TouchableOpacity style={styles.button} onPress={fazerLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          )}

          {modoCadastro && (
            <TouchableOpacity style={styles.button} onPress={registrar}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.switchButton} onPress={() => setModoCadastro(!modoCadastro)}>
            <Text style={styles.switchButtonText}>
              {modoCadastro ? "Já tem conta? Faça login" : "Criar nova conta"}
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  // ------------------
  // UI logado
  // ------------------
  return (
    <View style={styles.loggedContainer}>
      <App />
      <TouchableOpacity style={styles.logoutButton} onPress={sair}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

// Definição dos Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fundo leve
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  content: {
    padding: 30,
    alignItems: 'center', // Centraliza os itens horizontalmente
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#007AFF', // Cor azul primária
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  switchButton: {
    marginTop: 20,
    padding: 10,
  },
  switchButtonText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loggedContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Espaço no topo para Android
    backgroundColor: '#fff',
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#ff4d4d', // Cor vermelha para 'Sair'
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', // Fixa o botão na parte inferior
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});