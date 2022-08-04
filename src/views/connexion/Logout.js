import React from "react";
import { AuthContext } from "../../contexts/Auth";
import { useNavigation } from "@react-navigation/native";

export default function Logout(props) {
  const { logOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return logOut();
}
