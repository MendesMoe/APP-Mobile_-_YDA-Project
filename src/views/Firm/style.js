import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    position: "absolute",
    marginTop: 2,
    //justifyContent: "flex-start",
  },
  infoCompany: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    margin: 11,
  },
  infos: {
    width: "100%",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    top: 76,
    marginVertical: 3,
  },
  infosCompany: {
    fontSize: 12,
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 3,
  },
  logo: {
    width: "15%",
    height: 50,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    position: "absolute",
    width: "99%",
    textAlign: "center",
    lineHeight: 20,
  },
  list: {
    position: "absolute",
    marginTop: "35%",
    width: "100%",
  },
});
