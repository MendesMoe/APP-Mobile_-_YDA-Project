import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerHome: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  list: {
    backgroundColor: "#FFFFFF",
    width: "99%",
  },
  container: {
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
  person: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  informations: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#464646",
  },
  calendar: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoCalendar: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#A3A3A9",
    marginLeft: 10,
    marginTop: 5,
  },
  phone: {
    fontSize: 17,
    color: "#717E84",
    marginTop: 3,
  },
});
