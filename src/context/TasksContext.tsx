import React, {ReactElement, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  removeTask(id: string): void;
}

interface ITasksProvider {
  children: ReactElement;
}

const tasksData = '@MyTasks:Tasks';

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FC<ITasksProvider> = ({children}) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(tasksData);

      if (taskList) {
        setTasks(JSON.parse(taskList));
      }
    }

    loadTasks();
  }, []);

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...tasks, task];

      setTasks(newTaskList);

      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeTask = async (id: string) => {
    try {
      const newTaskList = tasks.filter(task => task.id !== id);

      setTasks(newTaskList);

      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return (
    <TasksContext.Provider value={{tasks, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTaskList(): ITasksContext {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em TasksProvider');
  }

  return context;
}
