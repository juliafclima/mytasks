import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121214",
    paddingTop: 40,
  },

  container: {
    flex: 1,
    backgroundColor: "#121214",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },

  text: {
    color: "#f1f1f1",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#29292e",
    color: "#f1f1f1",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },

  button: {
    backgroundColor: "#eba437",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#121214",
    fontSize: 18,
    fontWeight: "bold",
  },

  disabledButton: {
    backgroundColor: "#ccc",
  },

  titleTasks: {
    color: "#f1f1f1",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },

  buttonTask: {
    backgroundColor: "#29292e",
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: "center",
  },

  buttonTaskTitle: {
    color: "#f1f1f1",
    fontSize: 20,
    fontWeight: "bold",
  },
});
