import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
  },
  avatarArea: {
    width: 119,
    height: 119,
    borderRadius: 55,
    marginTop: -50,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
  },
  imagem: {
    width: 110,
    height: 110,
    borderRadius: 58,
  },
  fundo: {
    backgroundColor: "#FFA500",
    width: "100%",
    height: 60,
  },
  textoNome: {
    fontSize: 21,
    fontWeight: "600",
    color: "#45565F",
    padding: 9,
  },
  phone: {
    fontSize: 17,
    color: "#717E84",
    marginTop: 3,
  },
  onPress: {
    marginVertical: 3,
  },

  list: {
    width: "100%",
    height: height,
  },
});
