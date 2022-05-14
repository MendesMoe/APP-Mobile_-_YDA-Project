import { Linking, Alert, Platform } from "react-native";

export const callPhone = (phone) => {
  let phoneNumber = phone;
  console.log(Platform.OS);

  if (Platform.OS === "ios") {
    phoneNumber = `telprompt:${phone}`;
  } else if (Platform.OS === "android") {
    phoneNumber = `tel:${phone}`;
  } else {
    phoneNumber = `#`;
  }
  if (phoneNumber !== `#`) {
    Linking.canOpenURL(phoneNumber).then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not available");
      } else {
        console.log(phoneNumber);
        return Linking.openURL(phoneNumber).catch(
          console.error("errorrrr call function")
        );
      }
    });
  }
};
