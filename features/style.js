import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// App.js
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#007bff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  fecharBotao: {
    backgroundColor: "#dc3545",
    alignSelf: "flex-end",
    padding: 8,
    borderRadius: 5,
  },
  fecharTexto: {
    color: "#fff",
    fontWeight: "bold",
  },

  //frases

  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  frase: { marginTop: 20, fontSize: 16, fontStyle: "italic", textAlign: "center" },

  // imc
   input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    padding: 8,
    marginBottom: 10,
    textAlign: "center",
  },
  resultado: { marginTop: 10, fontSize: 18, fontWeight: "bold" },
  //todolist 
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
  //aa
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
