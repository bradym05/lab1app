import { Text, View, StyleSheet } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>App for Lab 2 of Mobile Application Development.</Text>
      <ToDoList/>
      <ToDoForm/>
    </View>
  );
}


const styles = StyleSheet.create({});