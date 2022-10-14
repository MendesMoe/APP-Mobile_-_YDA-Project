import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { DataTable } from "react-native-paper";

export default function Agenda() {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const data = [
    {
      visit_day_1: "lundi",
      visit_day_2: "jeudi",
      time_1: "8",
      time_2: "16",
      name: "CSM - Formacao",
    },
    {
      visit_day_1: "lundi",
      visit_day_2: "jeudi",
      time_1: "10",
      time_2: "12",
      name: "CSM - Numero2",
    },
  ];

  const week = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

  const hours = ["8", "10", "12", "14", "16"];

  const getDays = () => {
    week.map((day) => <view>{day}</view>);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AgGENDAAAAAAAA</Text>
      <Text style={styles.text}>Votre agenda semanal</Text>

      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={styles.headerTitle}>
            Heure / Jour
          </DataTable.Title>
          {week.map((day) => (
            <DataTable.Title style={styles.headerTitle}>
              {capitalize(day)}
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {hours.map((time) => (
          <DataTable.Row>
            <DataTable.Cell>{time}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
