import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { styles } from "./style";

interface ITask {
  id: string;
  title: string;
}

export default function Home() {
  const [newTasks, setNewTasks] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTasks,
    };

    setTasks([...tasks, data]);
    setNewTasks("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome, Dev!</Text>

        <TextInput
          placeholder="Nova tarefa..."
          placeholderTextColor={"#555"}
          style={styles.input}
          onChangeText={setNewTasks}
          value={newTasks}
        />

        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={[styles.button, newTasks === "" && styles.disabledButton]}
          disabled={newTasks === ""}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas tarefas</Text>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.buttonTask}>
              <Text style={styles.buttonTaskTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
