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
    width: "99%",
    marginRight:10
  },
  
  onPress: {
    marginVertical: 3,
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
  containerItem: {
    width: "100%",
    height: 90,
    backgroundColor: "#FEFEFE",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginVertical: 6,
    marginHorizontal: 6,
    paddingHorizontal: 4,
    // Android
    elevation: 3,

    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.11,
    shadowRadius: 2.62,
  },
  personItem: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  imageItem :{
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  informationsItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 18,
  },
  nameItem: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#464646",
  },
});
