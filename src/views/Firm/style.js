import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerFirm: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  center: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
  },
  imagem: {
    width: 109,
    height: 109,
    borderRadius: 55,
  },
  firmName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoPage: {
    color: "#717E84",
    fontSize: 14,
    margin: 5,
  },

  visiblePress: {},
  list: {
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  onPress: {
    marginBottom: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  infoCompany: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    margin: 11,
  },
  infos: {
    width: "100%",
    backgroundColor: "#FFA500",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 3,
  },
  infosCompany: {
    fontSize: 12,
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 3,
  },
  logo: {
    width: "20%",
    height: 70,
    borderRadius: 20,
  },

  title: {
    fontSize: 18,
    position: "absolute",
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
  },
  fundo: {
    backgroundColor: "#FFA500",
    width: "100%",
    height: 60,
  },
  avatarArea: {
    width: 119,
    height: 119,
    borderRadius: 55,
    marginTop: -50,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  textoNome: {
    fontSize: 21,
    fontWeight: "600",
    color: "#45565F",
    padding: 9,
  },
});
