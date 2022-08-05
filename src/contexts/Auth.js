import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const [login, setLogin] = useState(false);

  const addressPublic = "172.20.10.5:8000";
  const addressPrive = "127.0.0.1:8000";
  const reseau = addressPrive;

  async function connexion(username, mdp) {
    const url = "http://" + reseau + "/api/connexion";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: mdp,
      }),
    };
    const response = await fetch(url, options).then((res) => res.json());
    console.log(response.access_token);
    if (response.status_code == 200) {
      saveTokenStorage(response.access_token);
      console.log("function login ok" + response.access_token);
      let nameAfter = JSON.stringify(response.name);

      setAuthData({
        id: JSON.stringify(response.id),
        name: nameAfter.slice(1, -1),
      });

      setLogin(true);

      return "connecté";
    } else {
      return "Identifiants incorrects";
    }
  }

  async function saveTokenStorage(token) {
    await AsyncStorage.setItem("@token_yda", JSON.stringify(token));
  }

  async function logOut() {
    setAuthData(undefined);
    setLogin(false);
    AsyncStorage.removeItem("@token_yda");
  }

  return (
    <AuthContext.Provider value={{ login, authData, connexion, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
