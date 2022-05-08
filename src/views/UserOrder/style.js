import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    alignItems: "center",
  },
  imagemArea: {
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 130,
    borderRadius: 55,
    marginTop: -60,
    backgroundColor: "#FFF",
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  fundo: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    height: 90,
  },
  textoNome: {
    fontSize: 21,
    fontWeight: "600",
    color: "#45565F",
    padding: 11,
  },
  textoEmail: {
    fontSize: 17,
    color: "#717E84",
    marginTop: 3,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 6,
  },
  botao: {
    backgroundColor: "#FFA500",
    marginTop: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "45%",
  },
  textoBotao: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  list: {
    position: "absolute",
    marginTop: "75%",
    width: "100%",
  },
});
