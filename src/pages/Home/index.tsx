import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useTaskList} from '@/context/TasksContext';
import {TaskList} from '@/components/TaskList';
import {styles} from '@/pages/Home/style';
import {StatusBar} from 'expo-status-bar';

export default function Home() {
  const [newTasks, setNewTasks] = useState('');
  const {addTask} = useTaskList();

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTasks,
    };

    setNewTasks('');
    addTask(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>

        <TextInput
          placeholder="Nova tarefa..."
          placeholderTextColor={'#555'}
          style={styles.input}
          onChangeText={setNewTasks}
          value={newTasks}
        />

        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={[styles.button, newTasks === '' && styles.disabledButton]}
          disabled={newTasks === ''}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas tarefas</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
}
