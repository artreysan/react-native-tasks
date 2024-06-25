import { View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getTasks} from '../api.js';
import TaskList from '../components/TaskList.js';

const HomeScreen = () => {

  const [tasks, setTasks] = useState([]);
  
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View>
      <TaskList
        tasks={tasks}
      ></TaskList>

    </View>
  )
}

export default HomeScreen