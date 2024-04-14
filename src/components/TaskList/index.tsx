import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {ITask, useTaskList} from '@/context/TasksContext';

export const TaskList = () => {
  const {tasks, removeTask} = useTaskList();

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
        style: 'destructive',
      },
    ]);
  };

  return (
    <FlatList
      data={tasks as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTask}>
          <Text style={styles.buttonTaskTitle}>{item.title}</Text>
          <Ionicons name="trash-bin-outline" size={24} color="#f1f1f1" />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  buttonTaskTitle: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
});
